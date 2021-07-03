import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import projectImg from "../assets/images/projectImg.png";

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
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

export default function ProjectItem({
  img = projectImg,
  title = "project name",
  desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, sequi ut nam expedita placeat, temporibus earum voluptatem ratione minima ducimus, quam laborum suscipit qui accusantium vero numquam repellendus explicabo incidunt!"
}) {
  return (
    <ProjectItemStyles>
      <Link to="/Projects" className="projectItem__img">
        <img src={img} alt="project img" />
      </Link>
      <div className="projectItem__info">
        <Link to="github.com">
          <div className="projectItem__title">{title}</div>
        </Link>
        <p className="projectItem__desc">{desc}</p>
      </div>
    </ProjectItemStyles>
  );
}

ProjectItem.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
