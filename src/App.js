import React, { Component } from "react";
import "./App.css";
import Snake from "./snake";
import SnakeFood from "./Food";
const getRandomCoordinates = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  return [x, y];
};
const initState = {
  food: getRandomCoordinates(),
  speed: 500,
  direction: "Right",
  snakeDots: [
    [0, 0],
    [2, 0],
  ],
};
class App extends Component {
  state = initState;
  componentDidMount = (e) => {
    setInterval(this.moveSnake, this.state.speed);
    document.onkeydown = this.onkeydown;
  };
  componentDidUpdate = () => {
    this.checkIfOutOfBorders();
    this.checkIfCollapsed();
    this.CheckIfEat();
  };
  onkeydown = (e) => {
    e = e || window.event;
    console.log(e.keyCode);
    switch (e.keyCode) {
      case 37:
        this.setState({ direction: "Left" });
        break;
      case 38:
        this.setState({ direction: "Up" });
        break;
      case 39:
        this.setState({ direction: "Right" });
        break;
      case 40:
        this.setState({ direction: "Down" });
        break;
      default:
        break;
    }
  };
  moveSnake = () => {
    let dots = [...this.state.snakeDots];
    let head = dots[dots.length - 1];
    let x = head[0];
    let y = head[1];
    switch (this.state.direction) {
      case "Right":
        {
          head = [x, y + 2];
        }
        break;
      case "Left":
        {
          head = [x, y - 2];
        }
        break;
      case "Up":
        {
          head = [x - 2, y];
        }
        break;
      default:
        {
          head = [x + 2, y];
        }
        break;
    }
    dots.push(head);
    dots.shift();
    this.setState({ snakeDots: dots });
  };
  checkIfOutOfBorders = () => {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      this.onGameOver();
    }
  };
  checkIfCollapsed = () => {
    let snake = [...this.state.snakeDots];
    let head = snake[snake.length - 1];
    snake.pop();
    snake.forEach((dot) => {
      if (head[0] == dot[0] && head[1] == dot[1]) {
        this.onGameOver();
      }
    });
  };
  CheckIfEat = () => {
    let snake = [...this.state.snakeDots];
    let head = snake[snake.length - 1];
    let food = this.state.food;
    if (head[0] == food[0] && head[1] == food[1]) {
      this.setState({ food: getRandomCoordinates() });
      this.enlargeSnake();
      this.increaseSpeed();
    }
  };
  enlargeSnake = () => {
    let newSnake = [...this.state.snakeDots];
    newSnake.unshift([]);
    this.setState({
      snakeDots: newSnake,
    });
  };
  increaseSpeed = () => {
    if (this.state.speed > 10) {
      this.setState({
        speed: this.state.speed - 10,
      });
    }
  };
  onGameOver = () => {
    alert("GAME OVER YOUR RESULT IS : " + this.state.snakeDots.length);
    this.setState(initState);
  };
  render() {
    return (
      <div className="game-area">
        <Snake snakeDots={this.state.snakeDots} />
        <SnakeFood dot={this.state.food} />
      </div>
    );
  }
}

export default App;
