import React from 'react';
import './App.css';
import Dog from "./Dog";
import Counter from "./Counter";

class App extends React.Component {
    state = {
        numbers: 0,
        index: [
            {id:0},
            {id:1},
            {id:2},
            {id:3},
            {id:4},
            {id:5},
            {id:6},
            {id:7},
            {id:8}
        ],
        randomId:0
    };

    addNumber = () => {
        let audio = new Audio("dog.mp3")
        audio.play()
        this.setState({
            numbers: this.state.numbers + 1
        })
    };

    componentDidMount() {
        setInterval(() => {
            this.setState({
                randomId: this.getRandomImageIndex()
            })
        }, 600)
    }

    getRandomImageIndex = () => {
        return Math.floor(Math.random() * 9);
    }

    render = () => {
        let dogs = this.state.index.map(d => {
            return <Dog addNumber={this.addNumber} id={d.id} randomId={this.state.randomId}/>
        })
        return (
            <div className="wrapper">
                {dogs}
                <Counter number={this.state.numbers}/>
            </div>
        );
    };
}

export default App;
