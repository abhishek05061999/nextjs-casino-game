// src/hooks/useGameSearch.ts
import { useState, useEffect } from "react";
import { fetchGames } from "@/services/api";

// Defining the useGameSearch hook that accepts query, category, and vendor as arguments
const useGameSearch = (query: string, category: string, vendor: string) => {
  const [games, setGames] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Load games with search and filters
  const loadGames = async (reset = false) => {
    if (loading || (!reset && !hasMore)) return;
    setLoading(true);
    
    // Preparing query parameters for the API request
    const params: any = {
      limit: 25,
      offset: reset ? 0 : offset,
    };

    // Adding query, category, and vendor to params if provided
    if (query) params.query = query;
    if (category) params.category = category;
    if (vendor) params.vendor = vendor;

    try {
      // Fetching game data from the API using the prepared params

      const newGames = await fetchGames(params);
      setGames(reset ? newGames : [...games, ...newGames]);
      setOffset(reset ? 20 : offset + 20);
      setHasMore(newGames.length === 20);
    } catch (error) {
      console.error("Error fetching games:", error);
    }
    setLoading(false);
  };

  // useEffect to trigger loadGames whenever query, category, or vendor changes
  useEffect(() => {
    loadGames(true);
  }, [query, category, vendor]);

  return { games, loadGames, loading, hasMore };
};

export default useGameSearch;   

                                                                                                               
