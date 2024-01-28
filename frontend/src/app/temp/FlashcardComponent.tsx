import { useState } from "react";

interface FlashcardProps {
  flashcard: { question: string; answer: string };
  onGood: () => void;
  onNo: () => void;
}

const FlashcardComponent: React.FC<FlashcardProps> = ({
  flashcard,
  onGood,
  onNo,
}) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="flashcard">
      <div className="question">{flashcard.question}</div>
      {showAnswer && <div className="answer">{flashcard.answer}</div>}
      <button onClick={() => setShowAnswer(!showAnswer)}>
        {showAnswer ? "Hide Answer" : "Show Answer"}
      </button>
      <button onClick={onGood}>Good</button>
      <button onClick={onNo}>No</button>
    </div>
  );
};

export default FlashcardComponent;
