import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import "./App.css"
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import { actions, orginals } from './urls'


function App() {
  return (
    // <div className="App">
     <div> 
         <NavBar/>
         <Banner/>
         <RowPost url={orginals} title="Netflix Orginals"/>
         <RowPost url={actions} title="action" isSmall/>
      
    </div>
  );
}
export default App;
