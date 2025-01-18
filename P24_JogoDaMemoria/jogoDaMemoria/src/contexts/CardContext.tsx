import { createContext, ReactNode, useContext, useState } from "react";
import { CardType } from "../utils/types";

type CardContextValues = {
  cards: CardType[];
  setCards: React.Dispatch<React.SetStateAction<CardType[]>>;
  flipCard: (cardClicked: CardType) => void;
  cardsFlipped: number;
  chances: number;
  setChances: React.Dispatch<React.SetStateAction<number>>;
  generateCards: () => {
    id: number;
    value: string;
    isFlipped: boolean;
  }[];
};

export const initialState = {
  chances: 6,
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

  const flipCard = (cardClicked: CardType) => {
    if (!cardClicked.isFlipped && chances > 0) {
      if (firstCard) {
        if (secondCard) {
          return;
        } else if (cardClicked === firstCard) {
          return;
        } else {
          setSecondCard(cardClicked);
        }
      } else {
        setFirstCard(cardClicked);
      }
    } else {
      return;
    }

    setCards((prev) =>
      prev.map((card) => {
        if (card === cardClicked) {
          card.isFlipped = true;
        }
        return card;
      })
    );

    if (firstCard) {
      setTimeout(() => {
        if (firstCard.value !== cardClicked.value) {
          cardsDontMatch(firstCard, cardClicked);
        }
        setFirstCard(null);
        setSecondCard(null);
      }, 1000);
    }
  };

  const cardsDontMatch = (
    firstCardClicked: CardType,
    secondCardClicked: CardType
  ) => {
    setChances((prev) => prev - 1);
    setCards((prev) =>
      prev.map((card) => {
        if (card === firstCardClicked || card === secondCardClicked) {
          card.isFlipped = false;
        }
        return card;
      })
    );
  };

  const [cards, setCards] = useState<CardType[]>(generateCards);
  const cardsFlipped = cards.filter((card) => card.isFlipped).length;
  const [firstCard, setFirstCard] = useState<CardType | null>(null);
  const [secondCard, setSecondCard] = useState<CardType | null>(null);
  const [chances, setChances] = useState(initialState.chances);

  return (
    <CardContext.Provider
      value={{
        cards,
        setCards,
        flipCard,
        cardsFlipped,
        chances,
        setChances,
        generateCards,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
