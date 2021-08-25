import React from 'react';

class App extends React.Component {
  state = {
    onoff: 0,
  };

  offBtnClick = () => {
    console.log('offClick 클릭');
    this.setState({ onoff : 0});
  };
  
  onBtnClick = () => {
    console.log('onClick 클릭');
    this.setState({ onoff : 1});
  };

  render() {
    return (
      <div>
        <h1>switch state is: {this.state.onoff}</h1>
        <button onClick={this.onBtnClick}>On</button>
        <button onClick={this.offBtnClick}>Off</button>
      </div>
    );
  }
}

export default App;