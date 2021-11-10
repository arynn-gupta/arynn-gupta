import React, {useEffect} from 'react';
import styled from 'styled-components';
import { HiBriefcase } from 'react-icons/hi';
import { MdSchool } from 'react-icons/md';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutInfoItem from '../components/AboutInfoItem';
import ProgressBarItem from '../components/ProgressBarItem';
import TimelineItem from '../components/TimelineItem';
import ContactBanner from '../components/ContactBanner';
import AboutImg from '../assets/images/about-page-img.png';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  overflow: hidden;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    width: 100%;
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      font-family: 'Ginger Regular';
      margin-left: 1rem;
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .button-wrapper,
    a {
      width: 100%;
      text-align: center;
    }
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
      text-align: center;
    }
    .right {
      img {
        display: none;
      }
    }
  }
`;

export default function About() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi, I am
              <span>Aryan Gupta</span>
            </p>
            <h2 className="about__heading">A freelance web developer</h2>
            <div className="about__info">
              <PText>
                I am from Uttar pradesh, India. A place of beauty and nature. Since my childhood, i
                love art and design. I always try to design stuff with my unique point of view. I
                also love to create things that can be usefull to others.
              </PText>
              <br />
              <br />
              <PText>
                I started coding since I was in high school. Coding is also an art for me. I love it
                and now I have the opportunity to design along with the coding. I find it really
                interesting and I enjoyed the process a lot.
              </PText>
              <br />
              <br />
              <PText>
                My vision is to make the world a better place. Now almost everything is becoming
                better than ever. It is time for us to create more good stuff that helps the world
                to become a better place.
              </PText>
            </div>
            <div data-aos="fade-right">
              <Button btnText="Download CV" btnLink="https://drive.google.com/file/d/1gndaVP_NkmVoJAoO6Eo4yEjuDJuQfQHz/view?usp=sharing" type="url" />
            </div>
          </div>
          <div data-aos="fade-left" className="right">
            <img src={AboutImg} alt="profile img" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">My Skills</h1>
            <ProgressBarItem
              title="FrontEnd"
              items={[
                {
                  skillName: 'HTML/CSS',
                  desc: 'Hands on experience in Html/CSS',
                  value: '70',
                  textColor: '#16c79a',
                  pathColor: '#f2a154',
                },
                {
                  skillName: 'JavaScript',
                  desc: 'Hands on experience in JavaScript',
                  value: '70',
                  textColor: '#16c79a',
                  pathColor: '#f9f871',
                },
                {
                  skillName: 'ReactJS',
                  desc: 'Hands on experience in ReactJS',
                  value: '90',
                  textColor: '#16c79a',
                  pathColor: '#00af91',
                },
                {
                  skillName: 'jQuery',
                  desc: 'Hands on experience in jQuery',
                  value: '70',
                  textColor: '#16c79a',
                  pathColor: '#845ec2',
                },
                {
                  skillName: 'BootStrap',
                  desc: 'Hands on experience in BootStrap',
                  value: '70',
                  textColor: '#16c79a',
                  pathColor: '#9999ff',
                },
              ]}
            />
            <ProgressBarItem
              title="BackEnd"
              items={[
                {
                  skillName: 'NodeJS',
                  desc: 'Hands on experience in NodeJS',
                  value: '70',
                  textColor: '#16c79a',
                  pathColor: '#54e346',
                },
                {
                  skillName: 'ExpressJS',
                  desc: 'Hands on experience in ExpressJS',
                  value: '70',
                  textColor: '#16c79a',
                  pathColor: '#f9f871',
                },
                {
                  skillName: 'PHP',
                  desc: 'Hands on experience in PHP',
                  value: '80',
                  textColor: '#16c79a',
                  pathColor: '#2fa7e3',
                },
                {
                  skillName: 'MySQL',
                  desc: 'Hands on experience in MySQL',
                  value: '70',
                  textColor: '#16c79a',
                  pathColor: '#f88f01',
                },
              ]}
            />
            <AboutInfoItem title="Design" items={['Photoshop', 'After Effects', 'Figma', 'Blender', 'Cinema4D', 'Houdini', 'Unreal Engine']} />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">Resume</h1>
            <TimelineItem
              icon={<HiBriefcase />}
              title="Working Experience"
              items={[
                {
                  time: '2015-2022',
                  desg: 'Full Stack Web Developer',
                  org: 'Freelancer',
                  desc:
                    'Developing and maintaining full stack real life applications for smaller businesses. Projects include developing Augmented Reality based Shopping app, Wallet with UPI payment support etc.',
                },
                {
                  time: '2019-2022',
                  desg: 'Full Stack App Developer',
                  org: 'Freelancer',
                  desc:
                    'Designing and creating UI’s to implement pre-existing back-end functionality using CSS , Bootstrap , JQuery and Javascript .',
                },
              ]}
            />
            <TimelineItem
              icon={<MdSchool />}
              title="Education"
              items={[
                {
                  time: '2018-2022',
                  desg: 'College',
                  desc: 'Pranveer Singh Institute Of Technology, Kanpur, Uttar Pradesh',
                },
                {
                  time: '2007-2018',
                  desg: 'School',
                  desc: 'Mother Teresa Mission Higher Secondary School, Kanpur, Uttar Pradesh',
                },
              ]}
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
