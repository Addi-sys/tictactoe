import React, { Component } from 'react'
import Square from './Square'

export default class Board extends Component {

    calculateWinner = (squares) => {

        console.log('array', squares)

        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {

            const [a, b, c] = lines[i];

            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {

                return squares[a]

            }
        }
        return null;
    }


    selectSquare = (id) => {

        let array = this.props.squareList.slice()
        let gameOverValue = this.props.gameOver
        let historyArray = this.props.history

        if (array[id] !== "") {
            return alert("Pick Again!")
        }

        array[id] = this.props.nextPlayer ? "X" : "O"

        let winnerValue = this.calculateWinner(array)

        if (winnerValue == null && !array.includes('')) {
            gameOverValue = !gameOverValue
        }

        historyArray.push({squares: array, nextPlayer: !this.props.nextPlayer})
        console.log('squarelist',this.props.squareList)

        this.props.setParentsState({
            squareList: array,
            nextPlayer: !this.props.nextPlayer,
            winner: winnerValue,
            gameOver: gameOverValue,
            history: historyArray,
        })

    }
    render() {
        return (
            <div>
                <h4>next player = {this.props.nextPlayer ? "X" : "O"}</h4>
                <h3>{this.props.gameOver === true
                    ? `Game Over`
                    : `winner is ${this.props.winner}`}
                </h3>

                <div style={{ display: 'flex' }}>
                    <Square
                        id={0}
                        selectSquare={this.selectSquare}
                        value={this.props.squareList[0]}
                    />
                    <Square
                        id={1}
                        selectSquare={this.selectSquare}
                        value={this.props.squareList[1]}
                    />
                    <Square
                        id={2}
                        selectSquare={this.selectSquare}
                        value={this.props.squareList[2]}
                    />
                </div>
                <div style={{ display: 'flex' }}>
                    <Square
                        id={3}
                        selectSquare={this.selectSquare}
                        value={this.props.squareList[3]}
                    />
                    <Square
                        id={4}
                        selectSquare={this.selectSquare}
                        value={this.props.squareList[4]}
                    />
                    <Square
                        id={5}
                        selectSquare={this.selectSquare}
                        value={this.props.squareList[5]}
                    />
                </div>
                <div style={{ display: 'flex' }}>
                    <Square
                        id={6}
                        selectSquare={this.selectSquare}
                        value={this.props.squareList[6]}
                    />
                    <Square
                        id={7}
                        selectSquare={this.selectSquare}
                        value={this.props.squareList[7]}
                    />
                    <Square
                        id={8}
                        selectSquare={this.selectSquare}
                        value={this.props.squareList[8]}
                    />
                </div>
            </div>
        )
    }
}