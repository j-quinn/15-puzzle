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

    let direction = null;

    up = i - numRows >= 0 ? { exists: true, index: i - numRows } : up;
    down =
      i + numRows < numSquares ? { exists: true, index: i + numRows } : down;
    left = (i % numRows) - 1 >= 0 ? { exists: true, index: i - 1 } : left;
    right =
      (i % numRows) + 1 < numRows ? { exists: true, index: i + 1 } : right;

    if (up.exists && this.state.squares[up.index].value === 0) {
      direction = up;
    } else if (down.exists && this.state.squares[down.index].value === 0) {
      direction = down;
    } else if (left.exists && this.state.squares[left.index].value === 0) {
      direction = left;
    } else if (right.exists && this.state.squares[right.index].value === 0) {
      direction = right;
    }

    if (direction) {
      this.setState(theSquares => ({
        squares: theSquares.squares.map(square =>
          square.index === direction.index
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
