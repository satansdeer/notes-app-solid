import './App.css'
import { useNotes } from "./NotesContext";
import { createState } from "solid-js";

function App() {
  const [textState, setTextState] = createState({noteText: ""});
  const { state, addNote, removeNote } = useNotes();

  return (
    <>
      <input
        type="text"
        value={textState.noteText}
        onChange={(e) => setTextState({noteText: e.target.value})}
      />
      <button
        onClick={() => {
          addNote(textState.noteText);
          setTextState({noteText: ""});
        }}
      >
        Add note
      </button>
      <ul>
        {state.notes.map((note) => (
          <li onClick={() => removeNote(note.id)} key={note.id}>
            {note.text}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;