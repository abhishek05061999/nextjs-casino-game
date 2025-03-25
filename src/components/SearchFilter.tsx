// src/components/SearchFilter.ts

import { useState } from "react";
import styles from "@/styles/SearchFilter.module.scss";

// Defining static arrays for available categories and vendors

const categories = ["VIDEOSLOTS", "BLACKJACK", "BACCARAT", "LIVEDEALER"];
const vendors = ["PragmaticPlay", "EvolutionGaming", "JackpotOriginal"];

// Defining the SearchFilter component with two props: onSearch and onFilterChange

const SearchFilter = ({ onSearch, onFilterChange }: any) => {

   // Initializing state for search query, category, and vendor
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [vendor, setVendor] = useState("");

// Function to handle search input and trigger onSearch callback
  const handleSearch = () => {
    onSearch(searchQuery);
  };

  // Function to handle filter changes and trigger onFilterChange callback
  const handleFilter = () => {
    onFilterChange({ category, vendor });
  };

  return (
    // Container div with styles applied from SearchFilter.module.scss
    <div className={styles.filterContainer}>
      <input
        type="text"
        placeholder="Search games..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyUp={handleSearch}
      />
      <select onChange={(e) => setCategory(e.target.value)} value={category}>
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <select onChange={(e) => setVendor(e.target.value)} value={vendor}>
        <option value="">All Vendors</option>
        {vendors.map((ven) => (
          <option key={ven} value={ven}>
            {ven}
          </option>
        ))}
      </select>
      <button onClick={handleFilter}>Apply Filters</button>
    </div>
  );
};

export default SearchFilter; 
