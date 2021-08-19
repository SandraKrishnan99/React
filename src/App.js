import React,{Component} from 'react';
import './App.css';
import NavBar1 from './Components/NavBar/NavBar1';
import {Blogging} from './Components/Blogging/Blogging'; 
class App extends Component{
  render(){
  return (
    <div className="App">
      <NavBar1 />
      <Blogging />
    </div>
  );
}
}

export default App;
