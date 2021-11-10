import React from 'react';
import styled from 'styled-components';
import projectBg from '../assets/images/projectBg.png';

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    background: url(${projectBg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2rem;
    font-family: 'Ginger Regular';
  }
  .projectItem__desc {
    font-size: 1.5rem;
    font-family: 'Ginger Thin';
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

export default function ProjectItem({ title, desc, img, url }) {
  return (
    <ProjectItemStyles>
      <div className='projectItem__img'>
        <a href={url} target='_blank' rel='noreferrer'>
          <img src={img} alt='' />
        </a>
      </div>
      <div className='projectItem__info'>
        <div className='projectItem__title'>{title}</div>
        <p className='projectItem__desc'>{desc}</p>
      </div>
    </ProjectItemStyles>
  );
}
