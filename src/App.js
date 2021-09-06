import React from 'react';
import axios from 'axios';

class App extends React.Component {
  
  getLedSwitch = (sign) => {
    axios.post('http://192.168.0.9:3001/led', {
      ledSwitch: sign
    }).catch((e)=>{console.log(' ')});
  }

  render() {
    return (
      <div>
        <h1>switch state is:</h1>
        <button onClick={
          () => {
            console.log('on 클릭');
            this.getLedSwitch('on');
        }}>On</button>
        
        <button onClick={
          () => {
            console.log('onff 클릭');
            this.getLedSwitch('off');
          }  
          }>Off</button>
      </div>
    );
  }
}

export default App;