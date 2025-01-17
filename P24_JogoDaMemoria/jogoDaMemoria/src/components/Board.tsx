import "./Board.css";
import Card from "./Card";
import { CardType } from "../utils/types";

type Props = {
  cards: CardType[];
};

const Board = ({ cards }: Props) => {
  return (
    <div className="board">
      {cards.map((card, i) => (
        <Card card={card} key={i} />
      ))}
    </div>
  );
};

export default Board;
