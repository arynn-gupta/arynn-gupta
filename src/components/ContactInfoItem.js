import React from 'react';
import styled from 'styled-components';
import { MdPlace } from 'react-icons/md';
import PropTypes from 'prop-types';

const ContactInfoItemStyles = styled.div`
  padding: 2rem;
  background-color: var(--deep-dark);
  display: flex;
  align-items: center;
  gap: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  .info {
    font-size: 1.8rem;
  }
  .icon {
    color: var(--white);
    background-color: var(--gray-2);
    padding: 1.3rem;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  svg {
    width: 3.5rem;
  }
  @media only screen and (max-width: 768px) {
    .info {
      font-size: 1.4rem;
    }

    svg {
      width: 2rem;
    }
  }
`;

export default function ContactInfoItem({ icon = <MdPlace />, text = 'info' , path = ""}) {
  return (
    <ContactInfoItemStyles>
      <div className="icon">{icon}</div>
      <div className="info">
        <a href={path} target="_blank" rel="noreferrer">
          {text}
        </a>
      </div>
    </ContactInfoItemStyles>
  );
}

ContactInfoItem.propTypes = {
  icon: PropTypes.shape({
    color: PropTypes.string,
    size: PropTypes.string,
  }).isRequired,
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};
