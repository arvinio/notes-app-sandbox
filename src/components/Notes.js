import React, { useState, useEffect, useContext } from "react";
import ControlPanel from "./ControlPanel";
import Status from "./Status";
import { NoteContext } from "../context/NoteContext";

//getNotes();

const STATUS_INITIAL_VALUE = "";

export default function Notes() {
  const [status, setStatus] = useState(STATUS_INITIAL_VALUE);
  const { notes, setNotes } = useContext(NoteContext);

  useEffect(() => {
    setTimeout(() => setStatus(STATUS_INITIAL_VALUE), 3000);
  }, [status]);

  return (
    <div className="App">
      <ControlPanel setStatus={setStatus} />
      <Status status={status} />
    </div>
  );
}
