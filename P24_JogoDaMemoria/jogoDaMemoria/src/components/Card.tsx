import "./Card.css";
import { CardType } from "../utils/types";

type Props = {
  card: CardType;
};

const Card = ({ card }: Props) => {
  const flipCard = () => {};
  return (
    <div
      className={`card ${card.isFlipped ? "flipped" : ""}`}
      onClick={flipCard}
    >
      {card.isFlipped ? card.value : "?"}
    </div>
  );
};

export default Card;
