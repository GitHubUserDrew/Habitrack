import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNote, fetchAllNote, selectAllNote } from '../features/allNoteSlice'
import {SingleNote} from './';

const AllNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();
  const notes = useSelector(selectAllNote);

  useEffect(() => {
    dispatch(fetchAllNote());
  }, [dispatch]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleAddNote = () => {
    dispatch(createNote({ id, title, content }));
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <h2>Notes</h2>
      <div>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Enter a title"
        />
        <input
          type="text"
          value={content}
          onChange={handleContentChange}
          placeholder="Enter some content"
        />
        <button onClick={handleAddNote}>Add Note</button>
      </div>
      {notes
        .slice()
        .reverse()
        .map((note) => (
          <SingleNote key={note.id} noteId={note.id} />
        ))}
    </div>
  );
};

export default AllNote;
