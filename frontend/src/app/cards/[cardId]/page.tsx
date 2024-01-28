"use client";
import { useState, useEffect } from "react";
import Flashcard from "@/components/Flashcard";
import { GlobeAmericasIcon } from "@heroicons/react/24/outline";

type Params = {
    cardId: string;
};

export default function Page({ params: { cardId } }: { params: Params }) {
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

    const currentFlashcard = flashcards[currentFlashcardIndex];
    return (
        <div>
            {currentFlashcard && (
                <Flashcard
                    flashcard={currentFlashcard}
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
            <div className="flex justify-center mt-4 gap-2 items-center">
                <button className="rounded-md bg-blue-500 text-slate-100 px-4 py-2 font-semibold" onClick={exportToCSV}>Export to CSV</button>
                <a href={`/graph/${cardId}`} className="bg-blue-500 text-slate-100 rounded-md flex items-center px-4 py-2 font-semibold">
                    <GlobeAmericasIcon className="h-8 w-8 fill-white text-blue-500" />
                    <span>View Depedency Graph</span>
                </a>
            </div>
        </div>
    );
}