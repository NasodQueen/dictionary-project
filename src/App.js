import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">Dictionary</header>
      <div className="dictionary-phonetics">/ˈdɪkʃəˌnɛɹi/</div>
      <div className="dictionary-meaning">
        "a book or electronic resource that lists the words of a language and
        gives their meaning "
      </div>
      <div className="header-enter-text">
        what word would you like to look up?
      </div>
      <main>
        <Dictionary />
      </main>
      <footer>
        <div>
          <h3>credits</h3>
          <div className="footer-text">Coded by Steph (that's me!)</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
