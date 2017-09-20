import React, { Component } from 'react';
import Objective from './Objective';
import Game from './Game';
import './App.css'
import Scoreboard from './Scoreboard';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

      name: '',
      score: 0,

      targetXS: 725,
      targetYS: 325,
      targetXE: 775,
      targetYE: 375,

      mouseX: 0,
      mouseY: 0,
      
      topPlayers: [
        {
        name: 'Spencer',
        score: 9001
      }, {
        name: 'hehexd',
        score: 69
      }]

    }

    this.create = this.create.bind(this)
    this.updateScore = this.updateScore.bind(this);
    this.updateTopPlayers = this.updateTopPlayers.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.mousePosition = this.mousePosition.bind(this);
    this.modify = this.modify.bind(this)
    this.gameFinish = this.gameFinish.bind(this)
  
  }
  modify(event){
    this.setState({
      targetXE: this.state.targetXS + 50,
      targetYE: this.state.targetYS + 50
    })
  }

  gameFinish(event){
    this.setState({
      targetXS: 0,
      targetYS: 0,
      targetXE: 0,
      targetYE: 0,
      mouseX: 1,
      mouseY: 1
    })
  }

  create(event){
    var c = document.getElementById('myCanvas');
    c.width = c.width;
    var ctx=c.getContext("2d");
    ctx.fillStyle="#333333";
    ctx.fillRect(this.state.targetXS, this.state.targetYS, 50, 50);
    ctx.stroke();
    this.setState({
    })
  }

  handleChange(name) {
    this.setState({
      name: name
    })
  }

  updateScore(event) {
    if(this.state.targetXS <= this.state.mouseX && this.state.mouseX <= this.state.targetXE && this.state.targetYS <= this.state.mouseY && this.state.mouseY <= this.state.targetYE){
      var oldScore = this.state.score;
      this.setState({
        score: oldScore + 1,
        targetXS: Math.floor((Math.random() * 1450) + 0),
        targetYS: Math.floor((Math.random() * 650) + 0),
      })
    }
  }

  updateTopPlayers(event) {
    var player = {
      name: this.state.name,
      score: this.state.score
    };
    var newTopPlayers = this.state.topPlayers;
    newTopPlayers.push(player);
    this.setState({
      topPlayers: newTopPlayers,
      score: 0,
      name: ""
    })
  }

  mousePosition(coordinates) {
    this.setState({
      mouseX: coordinates.x,
      mouseY: coordinates.y
    })
  }


  render() {
    return (
      <div>
        <Objective />
        <div>
          <Game gameFinish={this.gameFinish} create={this.create} modify={this.modify} score={this.state.score} mousePosition={this.mousePosition} name={this.state.name} handleChange={this.handleChange} updateScore={this.updateScore} updateTopPlayers={this.updateTopPlayers}/>
          <div>
            <ol>
            {this.state.topPlayers.map((it, index) =>{
              return <Scoreboard key={index} {...it}/>
            })}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default App;