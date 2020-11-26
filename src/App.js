import React from "react";
import "./styles.css";
import Notes from "./components/Notes";
import NotesProvider from "./context/NoteContext";

export default function App() {
  return (
    <NotesProvider>
      <Notes />
    </NotesProvider>
  );
}
