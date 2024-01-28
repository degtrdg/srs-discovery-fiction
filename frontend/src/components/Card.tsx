import { useState } from 'react';

type CardProps = {
    frontContent: string;
    backContent: string;
};


const Card = ({ frontContent, backContent } : CardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flex">
      <div 
        className="px-64 py-40 bg-gray-200 shadow-lg rounded-lg drop-shadow-sm cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className={`w-full h-full p-4 transition-transform ${isFlipped ? 'rotate-y-180' : ''}`}>
          <div className="front-face text-center">{frontContent}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
