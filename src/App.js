import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import Main from "./Components/Main";
import { useState } from "react";
function App() {
  const [state, setState] = useState("");
  return (
    <div className="App">
      <Main setState={setState} state={state} />
    </div>
  );
}

export default App;
