import NotesConverter from "../2-widgets/notes-converter/NotesConverter";
import Header from "../5-shared/header/Header";

// Main app component
const App = () => (
  <div className="min-h-screen bg-shadow-grey h-full">
    <Header />
    <NotesConverter />
  </div>
);

export default App;
