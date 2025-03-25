// src/pages/index.tsx
import { useState, useCallback } from "react";
import GameGrid from "@/components/GameGrid";
import SearchFilter from "@/components/SearchFilter";
import useGameSearch from "@/hooks/useGameSearch";

const Home = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [vendor, setVendor] = useState("");
  
  // Destructure values from the useGameSearch hook
  const { games, loadGames, loading, hasMore } = useGameSearch(
    query,
    category,
    vendor
  );

  // Handle search
  const handleSearch = useCallback((searchQuery: string) => {
    setQuery(searchQuery);
  }, []);

  // Handle filter
  const handleFilterChange = (filter: any) => {
    setCategory(filter.category || "");
    setVendor(filter.vendor || "");
  };

  return (
    <div>
      <SearchFilter onSearch={handleSearch} onFilterChange={handleFilterChange} />
      <GameGrid games={games} />
      {loading && <p>Loading more games...</p>}
    </div>
  );
};

export default Home; 

