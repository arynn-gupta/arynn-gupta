import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';

const ColStyles = styled.div`
  .heading {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
  li {
    margin-bottom: 1rem;
  }
  a {
    font-size: 1.5rem;
    font-family: "Ginger Thin";
  }
`;

export default function FooterCol({
  heading = 'col heading',
  links = [
    {
      type: 'Link',
      title: 'Home',
      path: '/Home',
    },
    {
      id: '2',
      type: 'Link',
      title: 'About',
      path: '/About',
    },
  ],
}) {
  return (
    <ColStyles>
      <h1 className="heading">{heading}</h1>
      <ul>
        {links.map((item) => (
          <li key={uuid()}>
            {item.type === 'Link' ? (
              <Link to={item.path}>{item.title}</Link>
            ) : (
              <a href={item.path} target="_blank" rel="noreferrer">
                {item.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    </ColStyles>
  );
}
FooterCol.propTypes = {
  heading: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      title: PropTypes.string,
      path: PropTypes.string,
    }),
  ).isRequired,
};
