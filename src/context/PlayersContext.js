import { createContext, useState } from "react";

export const PlayersContext = createContext();

export const PlayersProvider = ({ children }) => {
  const [players, setPlayers] = useState([]);
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);

  const addPlayer = (name, isSetter, isFemale) => {
    setPlayers([...players, { name, isSetter, isFemale }]);
  };

  const removePlayer = (index) => {
    const newPlayers = [...players];
    newPlayers.splice(index, 1);
    setPlayers(newPlayers);
  };

  const shufflePlayers = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };
  
  const sortTeams = () => {
    const femalePlayers = players.filter((player) => player.isFemale);
    const malePlayers = players.filter((player) => !player.isFemale);
    
    const team1Players = [];
    const team2Players = [];
  
    // adiciona a primeira mulher sorteada no time 1
    const firstFemalePlayer = femalePlayers[Math.floor(Math.random() * femalePlayers.length)];
    team1Players.push(firstFemalePlayer);
    femalePlayers.splice(femalePlayers.indexOf(firstFemalePlayer), 1);
  
    // adiciona os dois levantadores sorteados nos times
    const setters = players.filter((player) => player.isSetter);
    shufflePlayers(setters);
    team1Players.push(setters[0]);
    team2Players.push(setters[1]);
  
    // adiciona os demais jogadores sorteados nos times
    shufflePlayers(femalePlayers);
    shufflePlayers(malePlayers);
    const otherPlayers = [...femalePlayers, ...malePlayers];
    for (let i = 0; i < otherPlayers.length; i++) {
      if (i % 2 === 0) {
        team1Players.push(otherPlayers[i]);
      } else {
        team2Players.push(otherPlayers[i]);
      }
    }
  
    setTeam1(team1Players);
    setTeam2(team2Players);
  };

  return (
    <PlayersContext.Provider value={{ players, addPlayer, removePlayer, team1, team2, sortTeams }}>
      {children}
    </PlayersContext.Provider>
  );
};