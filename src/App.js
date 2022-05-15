import { Component } from 'react';


import logo from './logo.svg';
import './App.css';
import { keyboard } from '@testing-library/user-event/dist/keyboard';

class App extends Component 
{
  constructor(){
    super();
    this.state = {
      name: {firstname:'Wahab', lastname:'Hussain'} 
    }
  }

  render()
  {
   return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi {this.state.name.firstname }{this.state.name.lastname }
        </p>
        <button onClick={() => {
          //this.setState({name: 'Wahab'})
          this.setState(() => {
            return {
              name: {firstname: 'Wahab', lastname: 'Hussain'},
            }
          }, 
          () => {
            console.log(this.state);
          });
          console.log(this.state);    
        }}>Change className</button>
      </header>
     </div>
    );
  }
}

export default App;
