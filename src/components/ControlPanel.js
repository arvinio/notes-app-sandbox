import React from "react";
import { createNote, getNotes, moveNote } from "../helpers/notes";

export default function ControlPanel({ setStatus }) {
  const create = () => {
    createNote("another note", false);
    setStatus("CREATED!");
  };

  const get = () => {
    getNotes();
  };

  const move = () => {
    moveNote();
    setStatus("MOVED!");
  };

  return (
    <>
      <button onClick={create}>Create note</button>
      <button onClick={get}>Get notes</button>
      <button onClick={move}>Move first note to end</button>
    </>
  );
}
