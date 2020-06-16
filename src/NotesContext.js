import { nanoid } from "nanoid";
import { createState, createContext, useContext } from "solid-js";

const NotesContext = createContext();

export const NotesProvider = (props) => {
  const [state, setState] = createState({ notes: [] })

  const addNote = (text) => {
    setState("notes", notes => [...notes, {text, id: nanoid()}])
  }

  const removeNote = (id) => {
    setState("notes", notes => notes.filter((note) => note.id !== id))
  };

  return <NotesContext.Provider value={{addNote, removeNote, state }}>
      {props.children}
  </NotesContext.Provider>
}

export const useNotes = () => useContext(NotesContext)