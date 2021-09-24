import React from "react";

function CreateArea(props) {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  const handleOnChange = (e) => {
    const element = e.target.name;
    const newValue = e.target.value;
    if (element === "title") {
      setTitle(newValue);
    } else if (element === "content") {
      setContent(newValue);
    }
  };

  const addNote = (e) => {
    e.preventDefault();
    if (title === "" || content === "") {
      return;
    }
    props.addNote(title, content);
    setTitle('');
    setContent('');
  };

  return (
    <div>
      <form>
        <input
          onChange={handleOnChange}
          value={title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleOnChange}
          value={content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={addNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
