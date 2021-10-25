import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

import '../global.scss';

import SEO from '../components/seo';
import ContactLinks from '../components/ContactLinks';
import FCLogo from '../images/fc-logo.svg';
import CeibalLogo from '../images/logo-horizontal-ceibal.svg';
import FastcallLogo from '../images/logo-fastcall.svg';
import DeviceMagicLogo from '../images/logo-device-magic.svg';
import ProfilePicture from '../components/ProfilePicture';

const StyledIndexPageContainer = styled.div`
  background-color: var(--background-black);
  min-height: 100vh;
  color: white;
  font-family: 'IBMPlex';
  h2 {
    text-align: center;
    @media (min-width: 576px) {
      font-size: 2rem;
    }
  }
  .desktop-container {
    max-width: 1440px;
    margin: 0 auto;
    @media (min-width: 576px) {
      padding: 0 0 0 4rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      max-width: 1440px;
    }
    .presentation {
      display: flex;
      justify-content: space-between;
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
            .highlighted-text {
              position: relative;
              z-index: 1;
            }
            .highlighted-text:before {
              position: absolute;
              content: '';
              width: 45px;
              height: 18px;
              left: -3px;
              top: -2px;
              background: linear-gradient(-10deg, var(--custom-blue), var(--magenta));
              padding: 5px;
              z-index: -1;
              transform: rotate(-5deg);
              border-radius: 0 3px 0 3px;
              filter: blur(2px);
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
    .divider {
      border-top: 1px solid #cfcfcf;
      width: 18rem;
      align-self: center;
      padding-top: 2rem;
      @media (min-width: 576px) {
        padding-top: 4rem;
        width: 40rem;
      }
    }
    .companies-i-worked-on {
      display: flex;
      flex-direction: column;
      margin: 0 1rem;
      padding-bottom: 2rem;
      @media (min-width: 576px) {
        margin: 4rem 4rem 4rem 0;
      }
      .companies-logos-container {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        @media (min-width: 576px) {
          margin-top: 4rem;
        }
        a {
          width: 75%;
          img {
            width: 100%;
          }
        }
        @media (min-width: 576px) {
          flex-direction: row;
        }
      }
    }
    .contact {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 1rem;
      padding-bottom: 2rem;
      @media (min-width: 576px) {
        margin: 0 4rem 4rem 0;
      }
      a {
        background-color: white;
        color: black;
        text-decoration: none;
        width: 10rem;
        border-radius: 5px;
        padding: 0.5rem 1rem;
        text-align: center;
        margin-top: 2rem;
      }
    }
  }
`;

const IndexPage = () => (
  <>
    <SEO />
    <StyledIndexPageContainer>
      <div className="desktop-container">
        <div className="presentation">
          <div className="left-panel">
            <div className="header">
              <div className="logo">
                <img
                  alt="Logo de Francisco Cobas"
                  className="desktop-logo"
                  height={125}
                  src={FCLogo}
                  width={125}
                />
                <img
                  alt="Logo de Francisco Cobas"
                  className="mobile-logo"
                  height={70}
                  src={FCLogo}
                  width={70}
                />
              </div>
              <div className="contact-links">
                <ContactLinks />
              </div>
            </div>

            <div className="content-text">
              <h1>Welcome back</h1>
              <div className="photo photo-mobile">
                <StaticImage
                  alt="Foto de perfil"
                  src="../images/foto-perfil-fondo-transparente.webp"
                />
              </div>
              <div className="text">
                <p>
                  <span className="highlighted-text">Hello!</span> I’m Francisco Cobas, I do web
                  development writing Javascript & Typescript code.
                </p>
                <p>
                  I have a considerable experience working with React in a wide range of projects.
                </p>
                <p>
                  Also I have a background of Operating System experience wich combine perfectly
                  with my front end abilities. I worked in many industries such as SaaS products,
                  Marketing, Healthcare, Education and more.
                </p>
                <p>
                  Lately I’ve been working as a cooperative partener at SUBTE and doing freelancing
                  jobs.
                </p>
              </div>
              <div className="contact-links-desktop">
                <ContactLinks />
              </div>
            </div>
          </div>
          <ProfilePicture />
        </div>
        <div className="companies-i-worked-on">
          <div className="divider" />
          <h2>Companies that trusted on me</h2>
          <div className="companies-logos-container">
            <a href="https://www.ceibal.edu.uy/" rel="noopener noreferrer" target="_blank">
              <img alt="Logo de Ceibal" height="112" src={CeibalLogo} width="367" />
            </a>
            <a href="https://fastcall.com/" rel="noopener noreferrer" target="_blank">
              <img alt="Logo de Fastcall" height="78" src={FastcallLogo} width="367" />
            </a>
            <a href="https://www.devicemagic.com/" rel="noopener noreferrer" target="_blank">
              <img alt="Logo de Device Magic" height="78" src={DeviceMagicLogo} width="367" />
            </a>
          </div>
        </div>
        <div className="contact">
          <div className="divider" />
          <h2>Do you want to build a project together?</h2>
          <a
            href={`mailto:fcarocena@gmail.com?&subject=Hello Francisco, let's go to the 🌔with this project!`}
            rel="noreferrer"
            target="_blank"
          >
            Contact me
          </a>
        </div>
      </div>
    </StyledIndexPageContainer>
  </>
);

export default IndexPage;
