import { useState } from "react";
import Board from "./Board";

const Game = () => {
  const shuffleArray = <T,>(array: T[]) => {
    const shuffled = [...array];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };
  const generateCards = () => {
    const values = ["A", "B", "C", "D", "E", "F", "G", "H"];
    const cards = values.map((value) => {
      return {
        value,
        isFlipped: false,
      };
    });

    const duplicatedCards = cards.concat([...cards]);

    return shuffleArray(duplicatedCards);
  };

  const [cards] = useState(generateCards);
  return (
    <div>
      <Board cards={cards} />
    </div>
  );
};

export default Game;
