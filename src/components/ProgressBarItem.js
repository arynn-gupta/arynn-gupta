import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { v4 as uuid } from 'uuid';
import 'react-circular-progressbar/dist/styles.css';
import PText from './PText';

const ProgressBarItemStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  margin: 4rem 0;
  .card {
    width: 100%;
    box-sizing: border-box;
    background-color: var(--deep-dark);
    padding: 5rem;
    border-radius: 8px;
  }
  .title {
    padding: 2rem;
    font-size: 2.4rem;
    font-family: 'Ginger Bold';
    letter-spacing: 0.1rem;
    text-transform: uppercase;
  }
  .items {
    display: flex;
    flex-wrap: wrap;
  }
  .item {
    min-width: 100px;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
  }
  .skillContainer {
    min-width: 80px;
    width: 10rem;
    height: 10rem;
    overflow: hidden;
  }
  .iteminfo {
    padding: 4rem;
  }
  .skillName {
    font-family: 'Ginger Regular';
  }
  .para {
    width: 25rem;
  }

  @media only screen and (max-width: 768px) {
    .title {
      font-size: 2.2rem;
      text-align: center;
    }
    .item {
      width: 100%;
      justify-content: center;
      text-align: center;
    }
    .skillName {
      font-size: 1.8rem;
    }
    .para {
      font-size: 1.5rem;
    }
  }
`;

export default function ProgressBarItem({
  title = 'title',
  items = [
    {
      skillName: 'HTML/CSS',
      desc: 'Hands on experience in Html/CSS',
      value: '70',
      textColor: '#16c79a',
      pathColor: '#f2a154',
    },
  ],
}) {
  return (
    <ProgressBarItemStyles>
      <div className="card">
        <h1 className="title">{title}</h1>
        <div data-aos="fade-up" className="items">
          {items.map((item) => (
            <div className="item" key={uuid()}>
              <div className="skillContainer">
                <CircularProgressbar
                  value={item.value}
                  text={`${item.value}%`}
                  styles={buildStyles({
                    textColor: item.textColor,
                    pathColor: item.pathColor,
                  })}
                />
              </div>
              <div className="iteminfo">
                <h1 className="skillName">{item.skillName}</h1>
                <PText>{item.desc}</PText>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ProgressBarItemStyles>
  );
}

ProgressBarItem.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      skillName: PropTypes.string,
      desc: PropTypes.string,
      value: PropTypes.string,
      textColor: PropTypes.string,
      pathColor: PropTypes.string,
    }),
  ).isRequired,
};
