import React from "react";

import Synonyms from "./Synonyms";
import Definitions from "./Definitions";
import Examples from "./Examples";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div className="definition-example">
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <Definitions definitions={definition.definition} />
              <Examples examples={definition.example} />
              <Synonyms synonyms={definition.synonyms} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
