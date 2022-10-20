import React from "react";
import { MdSearch } from "react-icons/md";
import "../components/SearchBar.css";

export default function SearchBar() {
  return (
    <div className="searchbox">
      <div className="search-elements">
        <input type="search" placeholder="Enter Keywords to search..." />
        <button>
          <MdSearch size="2em" color="white" />
        </button>
      </div>
    </div>
  );
}
