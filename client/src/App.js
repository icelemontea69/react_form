import './App.css';
import TextEditor from './components/TextEditor';



function App() {
  return (
    <div className="App">
      <header><h1> Dokumen Standar SPMI </h1></header>
      <div className="editor">
      <TextEditor></TextEditor>
    </div>
    </div>
    
  );
}

export default App;
