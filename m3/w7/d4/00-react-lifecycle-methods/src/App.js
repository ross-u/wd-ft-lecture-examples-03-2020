import React from 'react';
import './App.css';
import Clock from './components/Clock'

class App extends React.Component {
  state = {
    currentTime: '',
    showClock: false
  }

  updateTime = () => {
    const currentTime = new Date().toUTCString();

    this.setState({ currentTime: currentTime })
  }

  toggleShowClock = () => {
    this.setState( {showClock: !this.state.showClock} )
  }

  render() {
    
      return (
        <div className="App">
          <button onClick={this.toggleShowClock} > TOGGLE CLOCK </button>

          <button onClick={this.updateTime} > UPDATE TIME </button>

          { 
            this.state.showClock
              ? <Clock startTitle='COOL CLOCK' currentTime={this.state.currentTime}/>
              : null
          }

        </div>
    );
  }
}

export default App;
