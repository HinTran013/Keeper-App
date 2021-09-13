import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from '../notes';

const createNotes = currentNotes => (
    <Note 
        key = {currentNotes.key}
        title = {currentNotes.title}
        content = {currentNotes.content}
    />
)

function App() {
  return (
    <React.StrictMode>
      <Header />
        {notes.map(createNotes)}
      <Footer />
    </React.StrictMode>
  );
}

export default App;