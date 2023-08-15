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
      <div className="header-enter-text">What word do you want to look up?</div>
      <main>
        <Dictionary />
      </main>
      <footer>
        <h3>credits</h3>
        <div className="footer-text">
          <p>
            Coded by{" "}
            <a
              href="https://portfolio-project-823c68.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Steph
            </a>{" "}
            (that's me!)
            <br />
            Music choice:{" "}
            <a
              href="https://youtu.be/jC9RY86fKjM"
              target="_blank"
              rel="noreferrer"
            >
              Mr. Shakedown Theme
            </a>{" "}
            <small>(because sometimes you gotta do it to'em)</small>
            <br />
            Color choice:{" "}
            <a
              href="https://realtimecolors.com"
              target="_blank"
              rel="noreferrer"
            >
              https://realtimecolors.com
            </a>
            <br />
            Font choice:{" "}
            <a href="https://fontjoy.com/" target="_blank" rel="noreferrer">
              https://fontjoy.com/
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
