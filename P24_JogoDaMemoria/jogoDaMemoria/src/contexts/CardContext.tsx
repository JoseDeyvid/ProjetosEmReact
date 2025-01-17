import { createContext, ReactNode, useContext, useState } from "react";
import { CardType } from "../utils/types";

type CardContextValues = {
  cards: CardType[];
  setCards: React.Dispatch<React.SetStateAction<CardType[]>>;
  flipCard: (id: number) => void;
};

const CardContext = createContext({} as CardContextValues);

type Props = {
  children: ReactNode;
};

export const useCardContext = () => {
  return useContext(CardContext);
};

export const CardProvider = ({ children }: Props) => {
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

    return shuffleArray(duplicatedCards).map((card, i) => {
      return {
        id: i,
        value: card.value,
        isFlipped: card.isFlipped,
      };
    });
  };

  const flipCard = (id: number) => {
    setCards((prev) =>
      prev.map((card) => {
        if (card.id === id) {
          card.isFlipped = true;
        }
        return card;
      })
    );
  };
  const [cards, setCards] = useState<CardType[]>(generateCards);

  return (
    <CardContext.Provider value={{ cards, setCards, flipCard }}>
      {children}
    </CardContext.Provider>
  );
};
