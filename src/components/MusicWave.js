import React from 'react';
import styled from 'styled-components';

const MusicWaveStyles = styled.div`
  position: fixed;
  z-index: 100;
  bottom: 1rem;
  right: 1rem;
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

export default function MusicWave() {
  return (
    <MusicWaveStyles>
      <div className="loader">
        <span className="stroke" />
        <span className="stroke" />
        <span className="stroke" />
        <span className="stroke" />
        <span className="stroke" />
        <span className="stroke" />
        <span className="stroke" />
      </div>
    </MusicWaveStyles>
  );
}
