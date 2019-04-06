import React, { Component } from 'react';

import Travel from "./components/Travel";
import Travels from "./components/Travels";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        
        <h1>Mes différents voyages</h1>
        
        {/* Appel du composant "Travels" enregistré dans la page
        "Travels.js" */}
        <Travels />

      </div>
    );
  }
}

export default App;
