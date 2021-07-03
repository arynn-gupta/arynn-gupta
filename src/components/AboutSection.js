import React from 'react';
import styled from 'styled-components';
import Sectiontitle from './SectionTitle';
import PText from './PText';
import Button from './Button';
import AboutImg from '../assets/images/about-sec-img.png';

const AboutSectionStyles = styled.div`
  padding: 10rem 0;
  overflow:hidden;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left {
      width: 100%;
    }
    .aboutSection__right {
      display: none;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0rem;
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyles>
      <div className="container">
        <div className="aboutSection__left">
          <Sectiontitle subheading="Let me introduce myself" heading="About me" />
          <PText>
            I am a freelance website designer and developer from Uttar Pradesh, India. I create
            professional website. I love art and always try to show unique views to the audience
            through my designs.
          </PText>
          <div className="aboutSection__buttons">
            <Button
              btnLink="/Projects"
              btnText="Works"
              color="var(--accent)"
              outline="var(--dark-bg)"
            />
            <Button btnLink="/About" btnText="Read More" />
          </div>
        </div>
        <div data-aos="fade-left" className="aboutSection__right">
          <img src={AboutImg} alt="about section banner" />
        </div>
      </div>
    </AboutSectionStyles>
  );
}
