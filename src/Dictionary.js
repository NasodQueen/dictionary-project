import React from "react";
import { useState } from "react";

import axios from "axios";

import Results from "./Results";
import Photos from "./Photos";

import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [apiResponse, setApiResponse] = useState("");
  const [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setApiResponse(response.data[0]);
  }

  function handlePhotoResponse(response) {
    setPhotos(response.data.photos);
  }

  //Dictionary API documentation: https://dictionaryapi.dev
  function Search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    const photoApiKey = "50b85t44fa1aa6e70d8a0160o0237d36";

    let photoApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${photoApiKey}`;

    axios.get(photoApiUrl).then(handlePhotoResponse);
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
          className="form-search"
        />
        <input type="submit" value="Search" className="form-button" />
      </form>
      <Results results={apiResponse} />
      <Photos photos={photos} />
    </div>
  );
}
