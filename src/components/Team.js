import React, {Component} from 'react';

import Input from './Input'
import List from './List'
import Button from './Button'


class Team extends Component {
  constructor(props){
    super(props);

    this.state = {
      userInput: "",
      teamList: [],
      name: props.teamName
    }

    this.changeInput = this.changeInput.bind(this);
    this.addTeam = this.addTeam.bind(this);
    this.removePlayer = this.removePlayer.bind(this);
  }

  changeInput(e){
    this.setState({userInput: e})
  }


  addTeam(){
    this.setState({
      teamList: [...this.state.teamList, this.state.userInput],
      userInput: ""
    })
  }

  removePlayer(i){
    // let benched = e;

    // this.state.teamList.forEach((e,i,arr)=>{
    //     console.log(e,i, benched)
    //     if(e===benched){
    //         this.state.teamList.splice(i,1)
    //     }
    // })
    console.log(i)
    // this.state.teamList.splice(i,1);

    let newList = this.state.teamList.slice()
    newList.splice(i,1)
    this.setState({teamList: newList})
}

  
  render() {
    
    //console.log(this.state);
    
    return (
      <div className="team">

        <h3 className="title">{this.state.name}</h3>
        <Input 
          teamName={this.state.name}
          add={this.changeInput}
          input={this.state.userInput}
          />
        <Button 
          add={this.addTeam}/>
        
        <List
          arr={this.state.teamList}
          remove={this.removePlayer} 
        />
        

      </div>
      
    );
  }
}

export default Team;