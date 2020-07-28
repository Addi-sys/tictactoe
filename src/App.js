import React, { Component } from 'react'
import Board from './components/Board'
import './App.css';

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userName: "Slim Shady",
      nextPlayer: true,
      squareList: ['', '', '', '', '', '', '', '', ''],
      isClickList: [false, false, false, false, false, false, false, false, false]
    }
  }

  setParentsState = (obj) => {
    this.setState(obj)
  }

  render() {
    return (
      <div>
        <h1>tictactoe</h1>
        <h3>username = {this.state.userName}</h3>

        <Board
          squareList={this.state.squareList}
          setParentsState={this.setParentsState}
          nextPlayer={this.state.nextPlayer}
          isClickList={this.state.isClickList}
        />

        <ol>history</ol>
        <ol>ranking</ol>

      </div>
    )
  }
}

