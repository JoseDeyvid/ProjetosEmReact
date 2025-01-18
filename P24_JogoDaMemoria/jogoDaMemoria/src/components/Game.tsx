import { useState } from "react";
import Board from "./Board";
import "./Game.css";
import { initialState, useCardContext } from "../contexts/CardContext";

const Game = () => {
  const { cardsFlipped, cards, setCards, chances, setChances, generateCards } =
    useCardContext();
  const restartGame = () => {
    setChances(initialState.chances);
    setCards(generateCards());
  };
  return (
    <div className="game">
      <Board />

      {cardsFlipped === cards.length ? (
        <p>Você ganhou!</p>
      ) : chances > 0 ? (
        <p> Você possui {chances} tentativa(s)</p>
      ) : (
        <p>Game Over</p>
      )}
      <button onClick={restartGame}>Reiniciar jogo</button>
    </div>
  );
};

export default Game;
