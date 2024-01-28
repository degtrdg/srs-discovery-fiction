"use server";
import type { NextApiRequest, NextApiResponse } from "next";
import Papa from "papaparse";
import fs from "fs";
import path from "path";
import questions from "./questions.json";

export async function GET(request: Request) {
  // try {
  //   const csvFilePath = path.resolve("./src/app/api/flashcards/questions.csv");
  //   console.log(csvFilePath, "file");

  //   const csvFile = fs.readFileSync(csvFilePath, "utf8");
  //   console.log(csvFile);
  //   Papa.parse(csvFile, {
  //     header: false,
  //     complete: (results) => {
  //       console.log(results);
  //       return new Response("hi");
  //     },
  //     error: (error: Error) => {
  //       console.log(error);
  //       return new Response("hi");
  //     },
  //   });
  // } catch (error: any) {
  //   // response.status(500).json({ message: "Failed to read the CSV file" });
  //   console.log(error);
  //   return new Response("hi");
  return new Response(JSON.stringify(questions));
}
// type ResponseData = {
//   message: string;
// };

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ResponseData>
// ) {
//   res.status(200).json({ message: "Hello from Next.js!" });
// }
