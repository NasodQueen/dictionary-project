import React from "react";
import { useState } from "react";

import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function Search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      {" "}
      <form onSubmit={Search}>
        <input
          type="search"
          name="search-term"
          placeholder="Enter your word"
          onChange={handleKeywordChange}
        />
        <input type="submit" value="Search" />
      </form>{" "}
    </div>
  );
}
