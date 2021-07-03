import React from 'react';
import styled from 'styled-components';
import { FiFacebook, FiInstagram, FiGithub, FiLinkedin } from 'react-icons/fi';
import PText from './PText';
import Button from './Button';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';

const HeroStyles = styled.div`
  overflow: hidden;
  .hero {
    height: 100vh;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__heading {
    font-size: 2rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-family: 'Ginger Regular';
      font-size: 7rem;
      color: var(--white);
    }
  }
  .hero__info {
    margin-top: 15rem;
    .button {
      margin-top: 2rem;
    }
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    width: 50px;
  }
  .hero__social {
    top: 30%;
    left: 50px;
  }
  .hero__scrollDown {
    top: 50%;
    right: 50px;
  }

  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-family: 'Ginger Regular';
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__social__indicator {
    img {
      max-height: 45px;
      margin-top: 2rem;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }

  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 1.6rem;
          letter-spacing: 5px;
          margin-bottom: 2rem;
        }
      }
    }
  }

  .social__icons {
    width: 1.8rem;
    svg {
      stroke: var(--accent);
    }
  }

  @media only screen and (max-width: 768px) {
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__info {
      margin-top: 10rem;
      margin-right: 2rem;
      margin-left: 2rem;
    }
    .hero__social {
      left: 5px;
      top: 50%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 40px;
          max-width: 10px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 5px;
      top: 70%;
      right: 5px;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span data-aos="fade-right">Hello, this is ;</span>
            <span data-aos="fade-up" className="hero__name">
              Aryan Gupta
            </span>
          </h1>
          <div className="hero__info">
            <PText>
              I am working as a freelancer web designer and developer for 4 years. I love to design
              and make new web experience for the people.
            </PText>
            <div data-aos-delay="500" data-aos="zoom-in">
              <Button btnLink="/Projects" btnText="my work" />
            </div>
          </div>
          <div className="hero__social">
            <div className="hero__social__indicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="social media arrow" />
            </div>
            <div className="hero__social__text">
              <ul>
                <li>
                  <a href="http://facebook.com/arynn.gupta" target="_blank" rel="noreferrer">
                    <div className="social__icons">
                      <FiFacebook />
                    </div>
                  </a>
                </li>
                <li>
                  <a href="http://instagram.com/arynn.gupta" target="_blank" rel="noreferrer">
                    <div className="social__icons">
                      <FiInstagram />
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/aryan-gupta-83a81518b/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="social__icons">
                      <FiLinkedin />
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/arynn-gupta" target="_blank" rel="noreferrer">
                    <div className="social__icons">
                      <FiGithub />
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero__scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="scroll down arrow" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
