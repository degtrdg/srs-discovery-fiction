import { useState } from "react";

interface FlashcardProps {
  flashcard: { question: string; answer: string };
  onGood: () => void;
  onNo: () => void;
}

const Flashcard: React.FC<FlashcardProps> = ({
  flashcard,
  onGood,
  onNo,
}) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden">
      <div 
        className="p-5"
        onClick={() => setShowAnswer(!showAnswer)}
      >
        <div className="mb-2 text-xl font-bold text-gray-900">
          {flashcard.question}
        </div>
        {showAnswer && (
          <div className="text-gray-700">
            {flashcard.answer}
          </div>
        )}
      </div>
      <div className="flex justify-between items-center p-4">
        <button 
          className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
          onClick={() => {
            setShowAnswer(false);
            onGood();
          }}
        >
          Remebered
        </button>
        <button 
          className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
          onClick={() => {
            setShowAnswer(false);
            onNo();
          }}
        >
          Forgot
        </button>
      </div>
    </div>
  );
};

export default Flashcard;
