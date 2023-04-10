import React, { useContext, useState } from "react";
import { PlayersContext } from "../context/PlayersContext";

const AddPlayer = () => {
  const { addPlayer } = useContext(PlayersContext);
  const [name, setName] = useState("");
  const [isSetter, setIsSetter] = useState(false);
  const [isFemale, setIsFemale] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addPlayer(name, isSetter, isFemale);
    setName("");
    setIsSetter(false);
    setIsFemale(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={isSetter}
          onChange={(e) => setIsSetter(e.target.checked)}
        />
        Levantador
      </label>
      <label>
        <input
          type="checkbox"
          checked={isFemale}
          onChange={(e) => setIsFemale(e.target.checked)}
        />
        Mulher
      </label>
      <button type="submit">+</button>
    </form>
  );
};

export default AddPlayer;