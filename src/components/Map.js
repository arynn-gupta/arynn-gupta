import React from 'react';
import {FiExternalLink} from 'react-icons/fi';
import styled from 'styled-components';
import PText from './PText';
import MapImg from '../assets/images/map.png';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: none;
    svg{
      margin-left: .5rem;
      margin-bottom: -.2rem;
      width: 1.5rem;
      height: 1.5rem;
    }
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Here is me</h3>
          <PText>39 P - Block, Yashoda Nagar, Kanpur</PText>
          <a href="https://goo.gl/maps/uT96rCFYPj12EdKy6" target="_blank" rel="noreferrer" className="map__card__link">
            Open in Google Map
            <FiExternalLink />
          </a>
        </div>
      </div>
    </MapStyles>
  );
}
