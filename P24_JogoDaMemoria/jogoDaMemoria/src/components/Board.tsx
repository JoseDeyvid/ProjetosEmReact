import "./Board.css";
import Card from "./Card";
import { useCardContext } from "../contexts/CardContext";

const Board = () => {
  const { cards } = useCardContext();
  return (
    <div className="board">
      {cards.map((card, i) => (
        <Card card={card} key={i} />
      ))}
    </div>
  );
};

export default Board;
