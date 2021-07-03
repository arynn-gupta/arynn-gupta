import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../components/SectionTitle';
import ProjectItem from '../components/ProjectItem';
import projectData from '../assets/data/vfx_projects';

const VFXStyles = styled.div`
  padding: 10rem 0;
  overflow: hidden;
  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .projects__allItems {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
`;

export default function VFX() {
  return (
    <VFXStyles>
      <div className="container">
        <SectionTitle heading="Visual Effects" subheading="some of my recent experiments" />
        <div className="projects__allItems">
          {projectData.map((item) => (
            <ProjectItem key={item.id} title={item.name} desc={item.desc} img={item.img} />
          ))}
        </div>
      </div>
    </VFXStyles>
  );
}
