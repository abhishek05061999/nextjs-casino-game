// src/components/GameCard.tsx

import React from "react";
import { Game } from "@/types/Game";


// Defining the props interface for GameCard component
interface GameCardProps {
  game: Game;
}

// Creating a functional component called GameCard using React.FC
// React.FC<GameCardProps> ensures the component receives the correct props type
const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <div className="game-card">
      <img src={game.thumbnail} alt={game.name} className="game-image" />   
      <div className="game-info">
        <h3>{game.name}</h3>
        <p>{game.vendor}</p>
      </div>
    </div>
  );
};

export default GameCard; 

