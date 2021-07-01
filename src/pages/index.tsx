import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

import '../global.scss';

import FCLogo from '../images/fc-logo.svg';
import SEO from '../components/seo';
import ContactLinks from '../components/ContactLinks';

const StyledIndexPageContainer = styled.div`
  background-color: var(--background-black);
  min-height: 100vh;
  .desktop-container {
    max-width: 1440px;
    margin: 0 auto;
    @media (min-width: 576px) {
      padding: 0 0 0 4rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      max-width: 1440px;
    }
    .left-panel {
      @media (min-width: 576px) {
        margin-top: 2rem;
      }
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding-top: 1rem;
        .logo {
          margin-left: 1rem;
          @media (min-width: 576px) {
            margin-left: 0;
          }
          .mobile-logo {
            @media (min-width: 576px) {
              display: none;
            }
          }
          .desktop-logo {
            display: none;
            @media (min-width: 576px) {
              display: block;
            }
          }
        }
        .contact-links {
          margin-right: 1rem;
          @media (min-width: 576px) {
            display: none;
          }
          img {
            width: 1.5rem;
            height: 1.5rem;
            margin-left: 0.5rem;
          }
        }
      }
      .content-text {
        color: white;
        display: flex;
        flex-direction: column;
        @media (min-width: 576px) {
          margin-top: 0;
          display: flex;
          flex-direction: column;
        }
        h1 {
          font-family: 'IBMPlex';
          text-align: center;
          margin-top: 1rem;
          @media (min-width: 576px) {
            font-size: 4rem;
            text-align: left;
            margin-top: 0.5rem;
          }
        }
        .text {
          font-family: 'IBMPlex';
          margin: 1rem 1.5rem 3rem;
          @media (min-width: 576px) {
            margin: 0;
            width: 26rem;
          }
        }
        .contact-links-desktop {
          display: none;
          align-self: center;
          @media (min-width: 576px) {
            display: block;
          }
          img {
            width: 2rem;
            height: 2rem;
            margin: 2rem 0.5rem;
          }
        }
      }
      .photo-mobile {
        position: relative;
        @media (min-width: 576px) {
          display: none;
        }
      }
    }
  }

  .photo {
    position: relative;
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 3rem;
      background: linear-gradient(transparent, var(--background-black));
      left: 0;
      bottom: 0;
    }
  }
  .photo-desktop {
    display: none;
    @media (min-width: 576px) {
      display: block;
    }
  }
`;

const IndexPage = () => (
  <>
    <SEO />
    <StyledIndexPageContainer>
      <div className='desktop-container'>
        <div className='left-panel'>
          <div className='header'>
            <div className='logo'>
              <img
                className='desktop-logo'
                alt='Logo de Francisco Cobas'
                src={FCLogo}
                width={125}
                height={125}
              />
              <img
                className='mobile-logo'
                alt='Logo de Francisco Cobas'
                src={FCLogo}
                width={70}
                height={70}
              />
            </div>
            <div className='contact-links'>
              <ContactLinks />
            </div>
          </div>

          <div className='content-text'>
            <h1>Welcome back</h1>
            <div className='photo photo-mobile'>
              <StaticImage
                src='../images/foto-perfil.webp'
                alt='Foto de perfil'
              />
            </div>
            <div className='text'>
              <p>
                Hello! I’m Francisco Cobas, I do web development writing
                Javascript & Typescript code.
              </p>
              <p>
                I have a considerable experience working with React in a wide
                range of projects.
              </p>
              <p>
                Also I have a background of Operating System experience wich
                combine perfectly with my front end abilities. I worked in many
                industries such as SAS products, Marketing, Healthcare,
                Education and more.
              </p>
              <p>
                Lately I’ve been working as a cooperative partener at SUBTE and
                doing freelancing jobs.
              </p>
            </div>
            <div className='contact-links-desktop'>
              <ContactLinks />
            </div>
          </div>
        </div>
        <div className='photo photo-desktop'>
          <StaticImage src='../images/foto-perfil.webp' alt='Foto de perfil' />
        </div>
      </div>
    </StyledIndexPageContainer>
  </>
);

export default IndexPage;
