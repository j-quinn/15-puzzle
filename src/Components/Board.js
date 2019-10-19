import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  renderSquare(i) {
    const { value } = this.props.squares[i];

    return (
      <Square
        key={i}
        value={value === 0 ? null : value}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  renderBoard() {
    const board = [];
    for (let i = 0; i < 4; i++) {
      const columns = [];
      for (let j = 0; j < 4; j++) {
        columns.push(this.renderSquare(4 * i + j));
      }
      board.push(
        <div key={i} className='board-row'>
          {columns}
        </div>
      );
    }

    return board;
  }

  render() {
    return <div className='gameBoard'>{this.renderBoard()} </div>;
  }
}

export default Board;
