import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BlendsContainer from './components/BlendsContainer';


library.add(fas, far);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title"><FontAwesomeIcon icon={['fas', 'rainbow']}/> Diffuser Time <FontAwesomeIcon icon={['fas', 'rainbow']}/></h1>
      </header>
      <BlendsContainer />
    </div>
  );
}

export default App;
