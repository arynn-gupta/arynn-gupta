import React, { Component } from 'react';
import * as THREE from 'three';
import Song from '../assets/bgMusic.mp3';
import styled from 'styled-components';

const MusicWaveStyles = styled.div`
  position: fixed;
  z-index: 100;
  bottom: 1rem;
  right: 1rem;

  button {
    background: none;
    border: none;
  }

  .loader {
    height: 2rem;
    display: flex;
    align-items: center;
  }
  .loader .stroke {
    display: block;
    position: relative;
    background: var(--accent);
    height: 100%;
    width: 0.2rem;
    border-radius: 50px;
    margin: 0 1px;
    animation: animate 1.2s linear infinite;
  }

  .loader .flatline {
    display: block;
    position: relative;
    background: var(--accent);
    height: 100%;
    width: 0.2rem;
    border-radius: 50px;
    margin: 0 1px;
  }

  @keyframes animate {
    50% {
      height: 20%;
    }
    100% {
      height: 100%;
    }
  }
  .stroke:nth-child(1) {
    animation-delay: 0s;
  }
  .stroke:nth-child(2) {
    animation-delay: 0.3s;
  }
  .stroke:nth-child(3) {
    animation-delay: 0.6s;
  }
  .stroke:nth-child(4) {
    animation-delay: 0.9s;
  }
  .stroke:nth-child(5) {
    animation-delay: 0.6s;
  }
  .stroke:nth-child(6) {
    animation-delay: 0.3s;
  }
  .stroke:nth-child(7) {
    animation-delay: 0s;
  }
`;

const listener = new THREE.AudioListener();
// create a global audio source
const sound = new THREE.Audio(listener);

export class MusicWave extends Component {
  constructor(props) {
    super(props);
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.state = {
      isPlaying: true,
    };

    var camera = new THREE.PerspectiveCamera(
      20,
      window.innerWidth / window.innerHeight,
      1,
      10000
    );
    camera.add(listener);

    // load a sound and set it as the Audio object's buffer
    const audioLoader = new THREE.AudioLoader();
    audioLoader.load(Song, function loadBuffer(buffer) {
      sound.setBuffer(buffer);
      sound.setLoop(true);
      sound.setVolume(0.2);
      sound.play();
    });
  }

  handlePlay() {
    this.setState({ isPlaying: true });
    sound.play();
  }

  handlePause() {
    this.setState({ isPlaying: false });
    sound.stop();
  }

  render() {
    let button;
    if (this.state.isPlaying) {
      button = (
        <button className='musicToggle' onClick={this.handlePause}>
          <div className='loader'>
            <span className='stroke' />
            <span className='stroke' />
            <span className='stroke' />
            <span className='stroke' />
            <span className='stroke' />
            <span className='stroke' />
            <span className='stroke' />
          </div>
        </button>
      );
    } else {
      button = (
        <button className='musicToggle' onClick={this.handlePlay}>
          <div className='loader'>
            <span className='flatline' />
            <span className='flatline' />
            <span className='flatline' />
            <span className='flatline' />
            <span className='flatline' />
            <span className='flatline' />
            <span className='flatline' />
          </div>
        </button>
      );
    }
    return (
      <MusicWaveStyles>
        <canvas className='musicBg'></canvas>
        {button}
      </MusicWaveStyles>
    );
  }
}

export default MusicWave;
