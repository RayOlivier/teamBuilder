import React, { Component } from 'react';
import './App.css';
import Input from './components/Input'
import List from './components/List'
import Button from './components/Button'


class App extends Component {
  constructor(){
    super()

    this.state = {
      userInputA: "",
      userInputB: "",
      teamA: [],
      teamB: []
    }

    this.changeInputA = this.changeInputA.bind(this);
    this.changeInputB = this.changeInputB.bind(this);
    this.addTeamA = this.addTeamA.bind(this);
    this.addTeamB = this.addTeamB.bind(this);
  }

  changeInputA(e){
    this.setState({userInputA: e})
  }

  changeInputB(e){
    this.setState({userInputB:e})
  }

  addTeamA(){
    this.setState({
      teamA: [...this.state.teamA, this.state.userInputA],
      userInputA: ""
    })
  }

  addTeamB(){
    this.setState({
      teamB: [...this.state.teamB, this.state.userInputB],
      userInputB: ""
    })
  }
  
  render() {
    
    console.log(this.state);
    
    return (
      <div>

        <h1 className="title">Team Builder</h1>

        <h3 className="title">Team A</h3>
        <Input 
          teamName="Team A" 
          add={this.changeInputA}
          input={this.state.userInputA}
          />
        <Button 
          add={this.addTeamA}/>
        
        <List
          arr={this.state.teamA} 
        />

        
        <h3 className="title">Team B</h3>
        <Input 
          teamName="Team B"
          add={this.changeInputB}
          input={this.state.userInputB}  />
        <Button 
          add={this.addTeamB}/>
        
        <List
          arr={this.state.teamB} 
        />
      </div>
    );
  }
}

export default App;
