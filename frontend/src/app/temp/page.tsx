"use client";
import { useState, useEffect } from "react";
import FlashcardComponent from "./FlashcardComponent";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export default function Example({ params: { learnId } }: { params: Params }) {
  const [flashcards, setFlashcards] = useState([]);
  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0);

  useEffect(() => {
    fetch("/api/flashcards")
      .then((response) => response.json())
      .then((data) => setFlashcards(data))
      .catch((error) => console.error("Error fetching flashcards:", error));
  }, []);

  const handleGood = () => {
    if (flashcards.length > 1) {
      setFlashcards((prevFlashcards) => {
        const newFlashcards = prevFlashcards.filter(
          (_, index) => index !== currentFlashcardIndex
        );
        return newFlashcards;
      });
      setCurrentFlashcardIndex((prevIndex) =>
        prevIndex >= flashcards.length - 1 ? 0 : prevIndex
      );
    }
  };

  const handleNo = () => {
    if (flashcards.length > 1) {
      setFlashcards((prevFlashcards) => {
        const newFlashcards = [...prevFlashcards];
        if (currentFlashcardIndex !== flashcards.length - 1) {
          const removed = newFlashcards.splice(currentFlashcardIndex, 1)[0];
          newFlashcards.push(removed);
        }
        return newFlashcards;
      });
    }
  };

  const nextFlashcard = () => {
    if (flashcards.length > 1) {
      setCurrentFlashcardIndex((prev) => (prev + 1) % flashcards.length);
    }
  };

  const exportToCSV = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      flashcards
        .map(
          (e: { question: string; answer: string }) =>
            `${e.question},${e.answer}`
        )
        .join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "flashcards.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      {flashcards.length > 0 && (
        <FlashcardComponent
          flashcard={flashcards[currentFlashcardIndex]}
          onGood={() => {
            handleGood();
            nextFlashcard();
          }}
          onNo={() => {
            handleNo();
            nextFlashcard();
          }}
        />
      )}
      <button onClick={exportToCSV}>Export to CSV</button>
    </div>
  );
}
