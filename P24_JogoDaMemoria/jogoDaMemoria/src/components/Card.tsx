import "./Card.css";
import { CardType } from "../utils/types";
import { useCardContext } from "../contexts/CardContext";

type Props = {
  card: CardType;
};

const Card = ({ card }: Props) => {
  const { flipCard } = useCardContext();
  return (
    <div
      className={`card ${card.isFlipped ? "flipped" : ""}`}
      onClick={() => flipCard(card.id)}
    >
      {card.isFlipped ? card.value : "?"}
    </div>
  );
};

export default Card;
