"use client";
import { useState, useEffect } from "react";
import { csv } from "d3-fetch";
import Flashcard from "@/components/Flashcard";
import SpacedRepetitionScheduler from "@/utils/SpacedRepetitionScheduler";

type FlashcardData = {
  question: string;
  answer: string;
};

type Params = {
  learnId: string;
};

export default function Example({ params: { learnId } }: { params: Params }) {
  const [flashcards, setFlashcards] = useState<FlashcardData[]>([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const scheduler = new SpacedRepetitionScheduler();

  useEffect(() => {
    csv("./questions.csv").then((data) => {
      setFlashcards(
        data.map((row) => ({
          question: row.question,
          answer: row.answer,
        }))
      );
    });
  }, []);

  const handleCardEvaluation = (quality: number) => {
    const nextIndex = scheduler.schedule(
      currentCardIndex,
      quality,
      flashcards.length
    );
    setCurrentCardIndex(nextIndex);
  };

  return (
    <div className="min-h-full">
      <main className="py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-center text-3xl font-bold leading-tight text-gray-900">
            Flashcard Learning
          </h1>
          <div className="mt-6">
            {flashcards.length > 0 ? (
              <Flashcard
                data={flashcards[currentCardIndex]}
                onEvaluate={handleCardEvaluation}
              />
            ) : (
              <p>Loading flashcards...</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
