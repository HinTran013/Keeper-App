import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render separate Note components for each item.

//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.
function App() {
  const [noteList, setNoteList] = React.useState([]);

  const addNote = (title, content) => {
    setNoteList((prev) => {
      return [
        ...prev,
        {
          noteTitle: title,
          noteContent: content,
        },
      ];
    });
  };

  const deleteNote = (id) => {
    setNoteList(noteList.filter((singleNote, index) => {
      return index !== id;
    }))
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {noteList.map((singleNote, index) => {
        return (
          <Note key={index} id={index} title={singleNote.noteTitle} content={singleNote.noteContent} delete={deleteNote} />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
