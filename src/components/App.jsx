import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";
import "../styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      {notes.map((note) => (
        <Note key={note.id} title={note.title} description={note.description} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
