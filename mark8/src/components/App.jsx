import React, { useState } from "react";

const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑":
    "annoyed" /** add some more to show how the app now expands when there's new data */
};

function App() {
  const [meaning, setMeaning] = useState("Translation will happen here");

  function emojiEventHandler(event) {
    var userInput = event.target.value;
    var emojiMeaning = emojiDictionary[userInput];
    if (emojiMeaning === undefined) {
      emojiMeaning = "We don't have this in our database";
    }

    setMeaning(emojiMeaning);

    console.log(emojiMeaning);
  }
  return (
    <div className="App">
      <h1>Inside out</h1>
      <input
        style={{
          padding: "1em",
          minWidth: "80%"
        }}
        onChange={emojiEventHandler}
      ></input>
      <h2> {meaning} </h2>
    </div>
  );
}

export default App;
