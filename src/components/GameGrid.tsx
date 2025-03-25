// src/components/GameGrid.tsx
import React from "react";
import GameCard from "./GameCard";
import { Game } from "@/types/Game";

interface GameGridProps {
  games: Game[];
}
// Creating a functional component called GameGrid using React.FC
// React.FC<GameGridProps> ensures the component receives the correct props type

const GameGrid: React.FC<GameGridProps> = ({ games }) => {
  if (games.length === 0) {
    return <p>No games found.</p>;
  }
   

  // Rendering the grid of games if the games array is not empty
  
  return (
    <div className="game-grid">
      {games.map((game) => (
        <GameCard key={game.slug} game={game} />
      ))}
    </div>
  );
};

export default GameGrid;
