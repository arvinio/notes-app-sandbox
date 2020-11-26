import React, { useState, useEffect } from "react";
import { getNotes } from "../helpers/notes";

export const NoteContext = React.createContext(null);

export default function Provider({ children }) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const notesData = getNotes();
    setNotes(notesData);
  }, []);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {children}
    </NoteContext.Provider>
  );
}
