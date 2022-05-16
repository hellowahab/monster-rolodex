import { Component } from 'react';


import logo from './logo.svg';
import './App.css';
import { keyboard } from '@testing-library/user-event/dist/keyboard';

class App extends Component 
{
  constructor(){
    super();
    this.state = {
      monsters : [],
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => this.setState(() => {
        return{monsters: users}
      },
      () => {
        console.log(this.state);
      }      
      ));
  }

  render()
  {
   return (
    <div className="App">
      {
        this.state.monsters.map((monster) => {
          return <h1  >{monster.name}</h1>
        })        
      }
    </div>
    );
  }
}

export default App;
