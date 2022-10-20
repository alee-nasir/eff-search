import React from "react";
import DataList from "./DataList";
import { Tourists } from "../Tourists";
import { useState } from "react";
import { MdSearch } from "react-icons/md";
import "../components/SearchBar.css";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  //following logic not recommended in case you have many attributes of an object like gender, company etc...
  // const search = (data) => {
  //   return data.filter(
  //     (tourist) =>
  //       tourist.name.toLowerCase().includes(query) ||
  //       tourist.surname.toLowerCase().includes(query) ||
  //       tourist.email.toLowerCase().includes(query)
  //   );
  // };

  //The following logic is recommended in case you many atributes or values of an object

  const Keys = ["name", "surname", "email"];

  const search = (data) => {
    return data.filter((tourist) =>
      Keys.some((key) => tourist[key].toLowerCase().includes(query))
    );
  };

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
      <DataList data={search(Tourists)} />
    </>
  );
}
