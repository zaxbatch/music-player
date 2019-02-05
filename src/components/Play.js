import React, { Component } from 'react';
import Track01Mp3 from '../audio/01.mp3';
import Track01Ogg from '../audio/01.ogg';
import ReactHowler from 'react-howler'
import Button from '../components/Button'


class Play extends Component {
constructor (props) {
    super(props)



    this.state = {
      // currentSrcIndex: 0,
      playing: false
    }

    this.handlePlay = this.handlePlay.bind(this)
    this.handlePause = this.handlePause.bind(this)
}

handlePlay () {
    this.setState({
      playing: true
    })
  }

handlePause () {
    this.setState({
      playing: false
    })
  }


  render() {

  
  	return (
	<div>
        <ReactHowler
          src={ Track01Mp3 }

          playing={this.state.playing}
          // When the sources are swapped we'll pass a new
          // src prop into ReactHowler which will destroy our
          // currently playing Howler.js and initialize
          // a new Howler.js instance
        />
        
        <Button onClick={this.handlePlay}>Play</Button>
        <Button onClick={this.handlePause}>Pause</Button>
    </div>
  	);

 
  }
}

export default Play