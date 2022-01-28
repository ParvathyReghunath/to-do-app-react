import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{
  render(){
    return(
      <div className='App'>
        <header>
        <form id="to-do-form">
          <input type="text" placeholder='Enter text'/>
          <button id="to-do-form button"type='submit'>Add</button>
        </form>
      </header>
      </div>
    );
  }
}






export default App;
