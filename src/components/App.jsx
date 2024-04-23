import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";
import "../styles.css";

function CreatNote(note) {
  return (
    <Note key={note.id} title={note.title} description={note.description} />
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      {notes.map(CreatNote)}
      <Footer />
    </div>
  );
}

export default App;
