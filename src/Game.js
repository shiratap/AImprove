import React, { Component } from 'react';

class Game extends Component {
    
    constructor(props) {
        super(props);

        this.mousePos = this.mousePos.bind(this);
        this.youScored = this.youScored.bind(this);
        this.update = this.update.bind(this);
        this.inputName = this.inputName.bind(this);
        this.newFunction = this.newFunction.bind(this);
    }

    mousePos(event){
        var canvas = document.getElementById('myCanvas');
        var rect = canvas.getBoundingClientRect();
        this.props.mousePosition({x: event.clientX - rect.left, y: event.clientY - rect.top + .875});
        this.props.create();
        this.props.modify();
    }
    

    inputName(event){
        var name = event.target.value;
        this.props.handleChange(name);
    }

    youScored(event){
        this.props.updateScore();
    }

    update(event){
        this.props.updateTopPlayers();
    }

    newFunction(event){
        window.setTimeout(myFunction, 5000);
        function myFunction(){
            var c = document.getElementById('myCanvas');
            c.remove();
        }
        this.props.gameFinish();
    }


    render(){
        const { score, name } = this.props;
        return(
            <div>
                <canvas onMouseOver={this.newFunction} onClick={this.youScored} onMouseMove={this.mousePos} id="myCanvas" width="1500" height="700"></canvas>
                <div>Your Score: {score}</div>
                <div>
                    <div>
                        <input onChange={this.inputName} type="text" value={name}></input>
                        <div>
                            <input onClick={this.update} type="submit" value="Submit yo results"></input>
                        </div>
                    </div>
                </div>
            </div>
        )};
}

export default Game;
