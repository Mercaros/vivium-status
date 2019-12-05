import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBarVivium from "./ProgressBarVivium";
import Checklist from "./Checklist";
import Timer from './Timer';

function App() {
  return (
    <div className="App">
        <nav className="navbar-home">
            <h3>Vivium Status Page</h3>
        </nav>

        <div className="container-bar">
            <Timer id="Timer"/>
            <ProgressBarVivium/>
            <Checklist/>
        </div>

    </div>
  );
}

export default App;
