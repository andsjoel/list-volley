import React, { useContext } from "react";
import { PlayersContext } from "../context/PlayersContext";

const FirstList = () => {
  const { players, removePlayer } = useContext(PlayersContext);

  return (
    <ul>
      {players.map((player, index) => (
        <li key={index}>
          {player.name} {player.isSetter ? "⬤" : ""}{" "}
          - {player.isFemale ? "✿" : ""}
          <button onClick={() => removePlayer(index)}>-</button>
        </li>
      ))}
    </ul>
  );
};

export default FirstList;