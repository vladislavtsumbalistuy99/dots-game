import React, { Component } from 'react';
import './style.css';
import GameMode from '../components/game-menu/game-mode';
import NameField from '../components/game-menu/name-field';
import PlayBtn from '../components/game-menu/play-btn';
import Leaderboard from '../components/leaderboard';
import SingleRectangle from '../components/single-rectangle';
import Message from '../components/message';


class Dots extends Component {

  constructor(props) {
    super(props)
    this.state = {
      activeDot: null,
      clickedDots: [],
      disabledDots: [],
      dotsAmount: 25,
      gameMode: '',
      name: '',
      message: 'Click play button to start!',
      leaderboard: [{ 'name': 'Vladislav', points: 8, gameMode: 'Hard' }, { name: 'Vladislav', points: 7, gameMode: 'Hard' }],
      buttonLabel: 'PLAY',
    }
  }

  startNewGame = () => {
    this.setState({ clickedDots: [], disabledDots: [] }, function () {
      let { disabledDots, clickedDots, gameMode, name } = this.state;
      let gameTime;
      switch (gameMode) {
        case 'Easy':
          gameTime = 3500
          break;
        case 'Medium':
          gameTime = 2500
          break;
        case 'Hard':
          gameTime = 800
          break;
        case 'Flash mode!':
          gameTime = 500
          break;
        default:
          this.setState({ message: `${name}, please choose a game mode to start!` });
          return 0;
      }
      this.setState({ message: 'Game started!' });
      let interval = setInterval(() => {
        const randomIndex = this.getNumber(0, this.state.dotsAmount - 1)
        this.setState({ activeDot: randomIndex })
        setTimeout(() => {
          disabledDots.push(randomIndex)
          this.setState({ disabledDots })
        }, gameTime)
        if (disabledDots.length - clickedDots.length === 13 || clickedDots.length === 13) {
          clearInterval(interval);
          this.finishGame();
        }
      }, gameTime)
    })

  }

  finishGame = () => {
    let { clickedDots, name } = this.state;
    clickedDots.length === 13 ?
      this.setState({ message: `Congratulation, ${name}, you won!` }, () => this.updateLeaderboard()) : this.setState({ message: 'You lost, try again :(' });
    this.setState({ buttonLabel: 'PLAY AGAIN' })
  }

  updateLeaderboard = () => {
    let { name, disabledDots, gameMode, leaderboard } = this.state;
    this.setState({
      leaderboard: [...leaderboard, { name, 'points': 25 - disabledDots.length, gameMode }]
    })
  }

  getNumber = (min, max) => {
    let newNum = Math.floor(Math.random() * (max - min) + min);
    while (!this.canBeActive(newNum)) {
      newNum = Math.floor(Math.random() * (max - min) + min);
    }
    return newNum;
  }

  canBeActive = (id) => {
    if (!this.state.clickedDots.includes(id) && !this.state.disabledDots.includes(id)) {
      return true;
    }
    return false;
  }

  handleDotClick = (id) => {
    let { clickedDots } = this.state;
    clickedDots.push(id)
    this.setState({ clickedDots })
  }

  handlePlayButton = () => {
    const startNewGame = true;
    this.setState({ startNewGame })
    this.startNewGame();
  }

  handleInputName = e => {
    this.setState({ name: e.target.value });
  }

  handleGameMode = e => {
    this.setState({ gameMode: e.target.value });
  }

  render() {
    let dots;
    let indexes = []
    for (let i = 0; i < 25; i++) {
      indexes.push(i)
    }
    dots = indexes.map(i => <SingleRectangle clickedDots={this.state.clickedDots} disabledDots={this.state.disabledDots} handleDotClick={this.handleDotClick} active={this.state.activeDot} key={i} id={i} />)
    return (
      <div className='game'>
        <div className='game-board'>
          <div className='menu'>
            <GameMode handleGameMode={this.handleGameMode} />
            <NameField handleInputName={this.handleInputName} />
            <PlayBtn buttonLabel={this.state.buttonLabel} handlePlayButton={this.handlePlayButton} />
          </div>
          <div className='message'>
            <Message message={this.state.message} />
          </div>
          <div className='tiles'>
            {dots}
          </div>
        </div>

        <div className='leaderboard'>
          <Leaderboard leaderboard={this.state.leaderboard} />
        </div>
      </div>
    )
  }
}

export default Dots;