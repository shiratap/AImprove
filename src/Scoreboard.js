import React, { Component } from 'react';

class Scoreboard extends Component {
    render(){
        const { name, score } = this.props
    return(
        <li><div>{name}  {score}</div></li>
    )}
}

export default Scoreboard;