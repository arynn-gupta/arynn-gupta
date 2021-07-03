import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { MdDesktopMac } from "react-icons/md";
import PText from "./PText";

const ItemStyles = styled.div`
  text-align: center;
  .servicesItem__icon {
    svg {
      width: 3rem;
    }
  }
  .servicesItem__title {
    font-size: 2rem;
    font-family: 'Ginger Regular';
  }
  .para {
    margin-top: 2rem;
  }
`;

export default function ServicesSectionItem({
  icon = <MdDesktopMac />,
  title = "title",
  desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto minus at molestiae excepturi, doloribus eveniet assumenda doloremque nobis, a suscipit neque tempora cum exercitationem eius tempore quam cumque vitae optio?",
}) {
  return (
    <ItemStyles className="servicesItem">
      <div className="servicesItem__icon">{icon}</div>
      <div className="servicesItem__title">{title}</div>
      <PText>{desc}</PText>
    </ItemStyles>
  );
}

ServicesSectionItem.propTypes = {
  icon: PropTypes.shape({
    color: PropTypes.string,
    size: PropTypes.string,
  }).isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
