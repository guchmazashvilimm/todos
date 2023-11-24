import { useState } from "react";
import AppAddButton from "./components/AppAddButton";
import AppContainer from "./components/AppContainer";
import AppHeader from "./components/AppHeader";
import AppListing from "./components/AppListing";
import AppModal from "./components/AppModal";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState("");

  const handleNoteChange = (newNote) => {
    setCurrentNote(newNote);
  };

  const handleApply = () => {
    if (currentNote.trim() !== "") {
      setNotes([...notes, currentNote]);
      setCurrentNote("");
    }
  };

  return (
    <AppContainer>
      <div>
        <AppHeader />
        <AppListing notes={notes} setNotes={setNotes} />
      </div>
      <AppAddButton onChange={() => setIsVisible(!isVisible)} />
      {isVisible && (
        <AppModal
          isVisible={isVisible}
          onChange={() => setIsVisible(!isVisible)}
          note={currentNote}
          onNoteChange={handleNoteChange}
          onApply={handleApply}
        />
      )}
    </AppContainer>
  );
}

export default App;
