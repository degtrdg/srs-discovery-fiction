"use client";
import { useState, useEffect } from "react";

export default function Example({ params: { learnId } }: { params: any }) {
  const [chapter, setChapter] = useState("");

  useEffect(() => {
    fetch("/api/chapter")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch chapter");
        }
        return response.text();
      })
      .then((text) => setChapter(text))
      .catch((error) => console.error(error));
  }, []);

  return <div>{chapter}</div>;
}
