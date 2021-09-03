import "./App.scss";

import songs from "./songs.js";

const songItem = (song) => {
  return (
    <div key={song.title} className="songItem">
      <div className="songHeader">
        <h1 style={{ marginBottom: "0.1em" }}>{song.title}</h1>
        <h3 style={{ marginBottom: 0 }}>Melodi: {song.original}</h3>
        <p style={{ marginTop: "0.3em" }}>{song.author}</p>
      </div>
      <p className="songText">{song.text}</p>
      {renderHLine()}
    </div>
  );
};

const renderHeader = () => {
  return null;
};

const renderSongItems = () => {
  return songs.map((song) => songItem(song));
};

const renderHLine = () => {
  return <div className="hz"></div>;
};

const App = () => {
  return (
    <div className="App">
      {renderHeader()}
      {renderSongItems()}
    </div>
  );
};

export default App;
