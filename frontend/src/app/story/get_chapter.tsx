"use server";

export async function getChapter(chapter: any) {
  const fs = require("fs").promises;
  //   const chapterContent = await fs.readFile(`./${chapter}.txt`, "utf8");
  const chapterContent = await fs.readFile(`./chapter.txt`, "utf8");
  return chapterContent;
}
