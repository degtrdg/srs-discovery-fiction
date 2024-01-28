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
<div onClick={() => setShowAnswer(!showAnswer)} className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg border border-gray-200 shadow-md flex flex-col justify-between cursor-pointer" style={{ width: "500px", height: "300px" }}>
  <div className="p-5">
    <div className="mb-2 text-xl font-semibold text-center text-gray-900">
      {flashcard.question}
    </div>
    {showAnswer && (
      <div className="mt-4 text-gray-700 text-center">
        {flashcard.answer}
      </div>
    )}
  </div>
  <div className="flex justify-between items-center p-4 bg-gray-50">
    <button 
      className="text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 active:bg-blue-700"
      onClick={() => {
        setShowAnswer(false);
        onGood();
      }}
    >
      Remembered
    </button>
    <button 
      className="text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-md bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50 active:bg-red-700"
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
