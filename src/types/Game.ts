//src/types/game.ts

// Define the Game interface to structure game objects in the application
export interface Game {
  enabled: boolean;
  name: string;
  id: string;
  slug: string;
  vendor: string;
  description: string;
  thumbnail: string;
  categories: string[];
  theoreticalPayOut: number;
  favorite: boolean;
  category?: string;
  
}
