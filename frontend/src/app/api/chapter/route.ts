"use server";
import fs from "fs/promises";
import path from "path";

export async function GET() {
  try {
    const chapterPath = path.resolve("./src/app/api/chapter/chapter.txt");
    const chapterContent = await fs.readFile(chapterPath, "utf8");
    return new Response(chapterContent);
  } catch (error) {
    console.error(error);
    return new Response("Failed to read the chapter file", { status: 500 });
  }
}
