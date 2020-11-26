function initNotes() {
  localStorage.setItem('notes', JSON.stringify([]))
  return []
}

export function getNotes() {
  let notes = localStorage.getItem('notes')
  if (!notes) {
    return initNotes()
  }
  const parsedNotes = JSON.parse(notes)
  return parsedNotes
}

export function createNote(title, priority) {
  const notes = getNotes()
  const newNote = { title, priority }
  notes.push(newNote)
  console.log('about to save', notes)
  const jsonNoteArray = JSON.stringify(notes)
  localStorage.setItem('notes', jsonNoteArray)
}

export function moveNote() {
  const notes = getNotes()
  const indexToMove = 0
  const noteToMove = notes.length > 0 ? notes[indexToMove] : null
  notes.splice(indexToMove, 1)
  notes.splice(notes.length, 0, noteToMove)
  const jsonNoteArray = JSON.stringify(notes)
  localStorage.setItem('notes', jsonNoteArray)
}
