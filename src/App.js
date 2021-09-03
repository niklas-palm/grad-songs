import "./App.scss";

import songs from "./songs.js";

const songItem = (song) => {
  return (
    <div key={song.title} className="songItem">
      <div className="songHeader">
        <h1 style={{ marginBottom: "0.1em" }}>{song.title}</h1>
        <h3 style={{ marginBottom: 0 }}>{song.author}</h3>
        <p style={{ marginTop: "0.3em" }}> Melodi: {song.original}</p>
      </div>
      <div className="songText">{song.text}</div>
    </div>
  );
};

const renderSongItems = () => {
  return songs.map((song) => songItem(song));
};

const App = () => {
  return (
    <div className="App">
      <div className="header">This is a header</div>
      {renderSongItems()}
    </div>
  );
};

export default App;
