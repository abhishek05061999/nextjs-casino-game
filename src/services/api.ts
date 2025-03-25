import axios from "axios";

const BASE_URL = "https://jpapi-staging.jackpot.bet/casino/games";

// // Function to fetch games with optional search and filter parameters
export const fetchGames = async (params: any) => {
  try {
    // Make a GET request to the API with query parameters (params)
    const { data } = await axios.get(BASE_URL, { params });
    return data.data.items || [];
  } catch (error) {
    console.error("Error fetching games:", error);
    return [];
  }
};   