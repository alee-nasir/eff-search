import React from "react";
import DataList from "./DataList";
import { useState } from "react";
import { MdSearch } from "react-icons/md";
import "../components/SearchBar.css";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  return (
    <>
      <div className="searchbox">
        <div className="search-elements">
          <input
            type="search"
            placeholder="Enter Keywords to search..."
            onChange={(e) => setQuery(e.target.value)}
          />
          <button>
            <MdSearch size="2em" color="white" />
          </button>
        </div>
      </div>
      <DataList query={query} />
    </>
  );
}
