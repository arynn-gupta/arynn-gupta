import React from 'react';
import styled from 'styled-components';
import ErrorImg from '../assets/images/404.png';
import Button from "../components/Button";

const ErrorStyles = styled.div`
  background-size: 35px 35px;
  .container {
    height: 100vh;
    margin: 0px 0px;
    width: 100%;
  }
  .main {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .glitch {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    background-image: url(${ErrorImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 50rem;
    opacity: 0.7;
    text-align: center;
  }
  .text {
    font-family: 'Ginger Bold';
    font-size: 4rem;
    color: var(--white);
    letter-spacing: 1rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .button {
    position: absolute;
    top: 75%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width:90vw;
  }
  .btn__content {
    text-shadow: 0px 0px 3px var(--accent);
    text-shadow: 0px 0px 8px var(--accent);
  }

  @media only screen and (max-width: 768px) {
    .glitch {
      background-size: 25rem;
    }
    .text {
      font-size: 2rem;
    }
  }
`;

export default function Error() {
  return (
    <ErrorStyles>
      <div className="container">
        <Button btnLink="/" btnText="GOTO HOME" />
        <div className="main">
          <div className="glitch">
            <div className="text">PAGE NOT FOUND</div>
          </div>
        </div>
      </div>
    </ErrorStyles>
  );
}
