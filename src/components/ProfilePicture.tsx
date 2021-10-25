import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled, { keyframes } from 'styled-components';

import { StarMagentaBlue, StarBlueMagenta } from './star_icon';

const breif = keyframes`
  from {
    opacity: 0.10;
  }
  50% {
    opacity: 0.65;
  }
  to {
    opacity: 0.10;
  }
`;
const starBlue = keyframes`
  from {
    filter: blur(3px);
    opacity: 0.2;
    transform: rotate(-15deg);
  }
  10% {
    transform: rotate(-15deg);
  }
  25% {
    filter: blur(0);
    opacity: 0.2;
    transform: rotate(-17deg);
  }
  50% {
    filter: blur(0);
    opacity: 1;
    transform: rotate(-15deg);
  }
  75% {
    filter: blur(0);
    opacity: 1;
    transform: rotate(-12deg);
    
  }
  to {
    filter: blur(3px);
    opacity: 0.2;
    transform: rotate(-15deg);
  }
`;
const starMag = keyframes`
  from {
    filter: blur(3px);
    opacity: 0.2;
    transform: rotate(15deg);
  }
  10% {
    transform: rotate(15deg);
  }
  25% {
    filter: blur(0);
    opacity: 1;
    transform: rotate(17deg);
  }
  50% {
    filter: blur(0);
    opacity: 0.2;
    transform: rotate(15deg);
  }
  75% {
    filter: blur(0);
    opacity: 1;
    transform: rotate(12deg);
    
  }
  to {
    opacity: 0.2;
    filter: blur(3px);
    transform: rotate(15deg);
  }
`;
const StyledImageContainer = styled.div`
  .photo {
    position: relative;
    overflow: hidden;
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 3rem;
      background: linear-gradient(transparent, var(--background-black));
      left: 0;
      bottom: 0;
    }
    &:before {
      transition: opacity 0.75s linear;
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 470px;
      left: 15px;
      border-radius: 50% 50% 0 0 / 35%;
      filter: blur(15px);
      background: radial-gradient(circle at 75% 75%, black 30%, var(--custom-blue), var(--magenta));
      opacity: 0;
      @media (max-width: 576px) {
        opacity: 0.65;
        top: 225px;
      }
    }
    .star {
      position: absolute;
    }
    &:hover {
      .star {
        position: absolute;
        width: 50px;
        height: 50px;
        filter: blur(3px);
        svg {
          width: 100%;
          height: 100%;
          fill: radial-gradient(var(--custom-blue), var(--magenta));
        }
        &.mag {
          left: 100px;
          animation: ${starMag} 1.5s linear infinite;
          top: 150px;
          left: 120px;
        }
        &.blue {
          animation: ${starBlue} 1.5s linear infinite;
          top: 380px;
          left: 650px;
        }
      }
    }
    &:hover:before {
      opacity: 0.65;
      animation: ${breif} 2s linear infinite;
    }
  }

  .photo-desktop {
    display: none;
    @media (min-width: 576px) {
      display: block;
    }
  }
`;

function ProfilePicture(): JSX.Element {
  return (
    <StyledImageContainer>
      <div className="photo photo-desktop">
        <StaticImage alt="Foto de perfil" src="../images/foto-perfil-fondo-transparente.webp" />
        <span className="star mag">
          <StarMagentaBlue />
        </span>
        <span className="star blue">
          <StarBlueMagenta />
        </span>
      </div>
    </StyledImageContainer>
  );
}

export default ProfilePicture;
