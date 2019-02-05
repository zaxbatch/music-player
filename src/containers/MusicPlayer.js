import React, { Component } from 'react';
import '../css/App.css';
import  Controls from '../components/Controls';

class MusicPlayer extends Component {
  render() {
    return (
      <div className="App">
        <Controls />
        
      </div>
    );
  }
}

export default MusicPlayer;
