import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonStyles = styled.div`
  margin-top: 2rem;
  .button {
    opacity: ${(props) => (props.outline === 'var(--dark-bg)' ? 1 : 0.8)};
    padding: 0.1rem;
    z-index: 1;
    height: 5rem;
    width: 18rem;
    border: 0;
    outline: none;
    background-color: ${(props) => props.outline};
    display: inline-block;
    cursor: pointer;
    clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);
  }

  .btn__content {
    width: 100%;
    height: 100%;
    padding: 1.3rem;
    text-align: center;
    font-family: 'Ginger Bold';
    font-size: 1.5rem;
    text-transform: uppercase;
    background-color: ${(props) => props.color};
    color: ${(props) => props.outline};
    clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);
  }

  @media only screen and(max-width: 768px) {
    .button {
      max-width: 50%;
      font-size: 1.8rem;
    }
  }
`;

export default function Button({
  btnText = 'button text',
  btnLink = 'button link',
  type= 'link type',
  outline = 'black',
  color = 'yellow',
}) {
  return (
    <ButtonStyles outline={outline} color={color} className="button-wrapper">
      {type === 'path' ? (
        <Link className="button" to={btnLink}>
          <div className="btn__content">
            {btnText}
          </div>
        </Link>
        ) : (
          <a className="button" href={btnLink} target="_blank" rel="noreferrer">
            <div className="btn__content">
              {btnText}
            </div>
          </a>
        )}
    </ButtonStyles>
  );
}

Button.propTypes = {
  btnText: PropTypes.string.isRequired,
  btnLink: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
  outline: PropTypes.string,
};

Button.defaultProps = {
  outline: 'var(--accent)',
  color: 'var(--dark-bg)',
  btnLink: '#',
  type: 'path'
};
