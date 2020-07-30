import React, { Component } from 'react'
import Board from './components/Board'
import './App.css';
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import FacebookLogin from 'react-facebook-login';

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLogin: false,
      userName: "",
      nextPlayer: true,
      squareList: ['', '', '', '', '', '', '', '', ''],
      isClickList: [false, false, false, false, false, false, false, false, false],
      winner: "",
      gameOver: false,
      history: [],
      timeLimit: 30,
      playerScore: 0,
    }
  }

  responseFacebook = (response) => {

    this.setState({ isLogin: true, userName: response.name })

    console.log(response);
  }

  sendData = async () => {
    let data = new URLSearchParams();
    data.append("player", this.state.userName);
    data.append("score", "TIME_ELAPSED_IN_SECONDS");
    const url = `http://ftw-highscores.herokuapp.com/tictactoe-dev`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: data.toString(),
      json: true
    });
    console.log(response)
  }

  backToPast = (index) => {

    let past = this.state.history[index]
    console.log("ffg", past)
    this.setState({ ...this.state, squareList: past.squares, nextPlayer: past.nextPlayer })
  }

  setParentsState = (obj) => {
    this.setState(obj)
  }

  render() {

    if (!this.state.isLogin) {
      return (

        <FacebookLogin
          autoLoad={true}
          appId="897601730732358"
          fields="name,email,picture"
          callback={this.responseFacebook}
        />

      )
    }

    return (
      <div className='body'>


        <h1>tictactoe</h1>
        <h3>username = {this.state.userName}</h3>

        <Container>
          <Board
            setParentsState={this.setParentsState}
            {...this.state}
          />
        </Container>

        <ol>history</ol>
        {this.state.history.map((_, index) => {
          return (
            <li><button onClick={() => this.backToPast(index)}>Go To: {index + 1}</button></li>
          )
        })}
        <ol>ranking</ol>

      </div>
    )
  }
}

