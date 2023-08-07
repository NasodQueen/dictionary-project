import React from "react";
import { useState } from "react";

import axios from "axios";

import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [apiResponse, setApiResponse] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
    setApiResponse(response.data[0]);
  }

  //API documentation: https://dictionaryapi.dev
  function Search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
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
      </form>
      <Results results={apiResponse} />
    </div>
  );
}
