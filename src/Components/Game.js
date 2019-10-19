import React, { Component } from 'react';
import Board from '../Components/Board';

const numRows = 4;
const numSquares = numRows * numRows;

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: this.initSquares()
    };
  }

  initSquares() {
    let indexArray = [];
    let valueArray = [];
    let retArr = [];

    for (let i = 0; i < numSquares; i++) {
      indexArray = [...indexArray, i];
    }

    valueArray = this.shuffle(indexArray.slice(0));

    for (let i = 0; i < numSquares; i++) {
      retArr = [...retArr, { index: indexArray[i], value: valueArray[i] }];
    }

    return retArr;
  }

  /* Fisher-Yates algorithm */
  shuffle(arr) {
    let numElements = arr.length;
    let tempElement;
    let selectedElement;

    while (numElements) {
      selectedElement = Math.floor(Math.random() * numElements--);

      tempElement = arr[numElements];
      arr[numElements] = arr[selectedElement];
      arr[selectedElement] = tempElement;
    }

    return arr;
  }

  handleClick(i) {
    let up = { exists: true, index: 0 };
    let down = { exists: true, index: 0 };
    let left = { exists: true, index: 0 };
    let right = { exists: true, index: 0 };

    up = i - numRows >= 0 ? { exists: true, index: i - numRows } : up;
    down =
      i + numRows < numSquares ? { exists: true, index: i + numRows } : down;
    left = (i % numRows) - 1 >= 0 ? { exists: true, index: i - 1 } : left;
    right =
      (i % numRows) + 1 < numRows ? { exists: true, index: i + 1 } : right;

    console.log(
      'Current square: %i, up: %i, down: %i, left: %i, right: %i',
      i,
      up.index,
      down.index,
      left.index,
      right.index
    );

    if (up.exists && this.state.squares[up.index].value === 0) {
      console.log('Empty square above');
      this.setState(theSquares => ({
        squares: theSquares.squares.map(square =>
          square.index === up.index
            ? { ...square, value: this.state.squares[i].value }
            : square
        )
      }));
      this.setState(theSquares => ({
        squares: theSquares.squares.map(square =>
          square.index === i ? { ...square, value: 0 } : square
        )
      }));
    }
    if (down.exists && this.state.squares[down.index].value === 0) {
      console.log('Empty square below');
      this.setState(theSquares => ({
        squares: theSquares.squares.map(square =>
          square.index === down.index
            ? { ...square, value: this.state.squares[i].value }
            : square
        )
      }));
      this.setState(theSquares => ({
        squares: theSquares.squares.map(square =>
          square.index === i ? { ...square, value: 0 } : square
        )
      }));
    }
    if (left.exists && this.state.squares[left.index].value === 0) {
      console.log('Empty square left');
      this.setState(theSquares => ({
        squares: theSquares.squares.map(square =>
          square.index === left.index
            ? { ...square, value: this.state.squares[i].value }
            : square
        )
      }));
      this.setState(theSquares => ({
        squares: theSquares.squares.map(square =>
          square.index === i ? { ...square, value: 0 } : square
        )
      }));
    }
    if (right.exists && this.state.squares[right.index].value === 0) {
      console.log('Empty square right');
      this.setState(theSquares => ({
        squares: theSquares.squares.map(square =>
          square.index === right.index
            ? { ...square, value: this.state.squares[i].value }
            : square
        )
      }));
      this.setState(theSquares => ({
        squares: theSquares.squares.map(square =>
          square.index === i ? { ...square, value: 0 } : square
        )
      }));
    }
  }

  render() {
    console.log(this.state.squares);
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
