import React, { Component } from 'react';
import Board from '../Components/Board';

class Game extends Component {
  state = {
    squares: [
      {
        position: 0,
        value: 0
      },
      {
        position: 1,
        value: 1
      },
      {
        position: 2,
        value: 2
      },
      {
        position: 3,
        value: 3
      },
      {
        position: 4,
        value: 4
      },
      {
        position: 5,
        value: 5
      },
      {
        position: 6,
        value: 6
      },
      {
        position: 7,
        value: 7
      },
      {
        position: 8,
        value: 8
      },
      {
        position: 9,
        value: 9
      },
      {
        position: 10,
        value: 10
      },
      {
        position: 11,
        value: 11
      },
      {
        position: 12,
        value: 12
      },
      {
        position: 13,
        value: 13
      },
      {
        position: 14,
        value: 14
      },
      {
        position: 15,
        value: 15
      }
    ]
  };

  handleClick(i) {
    console.log(i);
  }

  render() {
    return (
      <div>
        <Board
          squares={this.state.squares}
          onClick={i => this.handleClick(i)}
        />
      </div>
    );
  }
}

export default Game;
