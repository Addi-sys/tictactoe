import React, { Component } from 'react'
import Board from './components/Board'
import './App.css';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userName: "Slim Shady",
      nextPlayer: true,
      squareList: ['', '', '', '', '', '', '', '', ''],
      isClickList: [false, false, false, false, false, false, false, false, false],
      winner: "",
      gameOver: false,
      history: [],
    }
  }


  responseFacebook = (response) => {
    console.log(response);
  }

  responseGoogle = (response) => {
    console.log(response);
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
    return (
      <div>

        <h1>LOGIN WITH FACEBOOK AND GOOGLE</h1>

        <FacebookLogin
          appId="354415365571254" //APP ID NOT CREATED YET
          fields="name,email,picture"
          scope="public_profile,email"
          onlogin="checkLoginState();"
          callback={this.responseFacebook}
        />
        <br />
        <br />


        <GoogleLogin
          clientId="" //CLIENTID NOT CREATED YET
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
        />

        <h1>tictactoe</h1>
        <h3>username = {this.state.userName}</h3>

        <Board
          squareList={this.state.squareList}
          setParentsState={this.setParentsState}
          // nextPlayer={this.state.nextPlayer}
          // isClickList={this.state.isClickList}
          // winner={this.state.winner}
          // gameOver={this.state.gameOver}
          // history={this.state.history}
          {...this.state}
        />

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

