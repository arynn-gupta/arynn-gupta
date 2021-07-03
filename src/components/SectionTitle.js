import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const SectionTitleStyles = styled.div`
  text-align: center;
  p {
    font-family: 'Ginger Thin';
    font-size: 1.5rem;
  }
  h2 {
    font-family: 'Ginger Regular';
    font-size: 3.5rem;
    margin-top: 0.5rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    p {
      font-size: 1.2rem;
    }
    h2 {
      font-size: 3.2rem;
    }
  }
`;

export default function SectionTitle({
    subheading='subheading',
    heading='heading',
}) {
  return (
    <SectionTitleStyles className="section-title">
      <p>{subheading}</p>
      <h2>{heading}</h2>
    </SectionTitleStyles>
  );
}

SectionTitle.propTypes = {
  subheading: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired
};
