import React from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import { HiBriefcase } from "react-icons/hi";

const TimelineItemStyles = styled.div`
  margin: 4rem 0;
  .heading {
    padding: 4rem;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .timeline__icon {
    height: 4rem;
    width: 4rem;
    margin-right: 1rem;
  }
  .title {
    font-size: 2.4rem;
  }
  .timeline__item {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .items {
    display: flex;
  }
  .time {
    font-family: 'Ginger Regular';
    white-space: nowrap;
    font-size: 2rem;
    border-left: 2px solid #545454;
    padding-left: 2rem;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      left: -10px;
      height: 15px;
      width: 15px;
      border-radius: 50%;
      border: 2px solid #545454;
      background-color: var(--dark-bg);
    }
  }
  .item {
    width: 100%;
    margin: 0 10rem;
    margin-bottom: 2rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 8px;
  }
  .desg {
    font-family: 'Ginger Regular';
    margin: 1rem 0;
    font-size: 2.2rem;
  }
  .org {
    font-family: 'Ginger Light';
    margin: 1rem 0;
    font-size: 1.8rem;
  }
  .desc {
    font-family: 'Ginger Thin';
    color: #7f7f7f;
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 768px) {
    .heading {
      justify-content: center;
    }
    .title {
      font-size: 2rem;
    }
    .item {
      margin: 4rem 0;
    }
    .time {
      font-size: 1.6rem;
    }
    .desg {
      font-size: 1.8rem;
    }
    .org {
      font-size: 1.4rem;
    }
    .desc {
      font-size: 1.3rem;
    }
  }
`;

export default function TimelineItem({
  icon = <HiBriefcase />,
  title = "title",
  items = [
    {
      time: "20xx-20xx",
      desg: "designation",
      org: "organisation",
      desc: "description",
    },
  ],
}) {
  return (
    <TimelineItemStyles>
      <div className="heading">
        <div className="timeline__icon">{icon}</div>
        <h1 className="title">{title}</h1>
      </div>
      <div className="timeline__item">
        {items.map((item) => (
          <div className="items" key={uuid()}>
            <p data-aos="fade-up" className="time">
              {item.time}
            </p>
            <div data-aos="fade-left" className="item">
              <p className="desg">{item.desg}</p>
              <p className="org">{item.org}</p>
              <p className="desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </TimelineItemStyles>
  );
}