import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBarVivium from "./ProgressBarVivium";
import Checklist from "./Checklist";

function App() {
  return (
    <div className="App">
        <nav className="navbar-home">
            <h3>Vivium Status Page</h3>
        </nav>

        <div className="container-bar">
            <ProgressBarVivium/>
            <Checklist/>
        </div>

    </div>
  );
}

export default App;
