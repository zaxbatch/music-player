import React, { Component } from 'react';
import '../css/App.css';
import MusicPlayer from './MusicPlayer';

class App extends Component {
  render() {
    return (
      <div className="App">

      	<h1>Music Player</h1>
      	<br />
        <MusicPlayer />
        
      </div>
    );
  }
}

export default App;
