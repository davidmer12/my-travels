import React, { Component } from 'react';

import Travel from "./components/Travel";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Travel 
        destination="Paris"
        country="France"
        image="https://static.latribune.fr/full_width/902049/centre-ville.jpg"
        distance="5000 Kms" />


        <Travel 
        destination="Dublin"
        country="Irlande"
        image="https://voyagerenirlande.files.wordpress.com/2012/10/dublin-liffey-00123.jpeg"
        distance="10 000 Kms" />

      </div>
    );
  }
}

export default App;
