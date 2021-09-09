import React from 'react';
import styled from 'styled-components';
import SEO from '../components/seo';
import SurveyForm from '../components/SurveyForm';

import FCLogo from '../images/fc-logo.svg';

const StyledSurveyPageContainer = styled.div`
  background: #050505;
  color: white;
  font-family: 'IBMPlex';
  .main-wrapper {
    max-width: 1100px;
    margin: 0 auto;
    padding: 1rem 0 2rem;
    .header {
      display: flex;
      align-items: center;
    }
    .logo {
      width: 10rem;
      height: 10rem;
    }
    h1 {
      margin-left: 12rem;
      font-family: 'IBMPlexExtraLight';
      span {
        font-family: 'IBMPlex';
      }
    }
    .description {
      width: 600px;
      margin: 0rem auto 2rem;
      font-size: 1.1rem;
    }
  }
`;

function SurveyPage(): JSX.Element {
  return (
    <>
      <SEO description='This page es for showcasing the react-hook-form usage.' />
      <StyledSurveyPageContainer>
        <div className='main-wrapper'>
          <div className='header'>
            <img src={FCLogo} alt='Logo de Ceibal' className='logo' />
            <h1>
              FranciscoDev <span>Survey</span>
            </h1>
          </div>
          <p className='description'>
            This survey is just for showcasing the react-hook-form use. The
            submitted data will not be public exposed in any form. I will
            collect this data to improve the content that I create. Thank you
            for taking your time and answer the questions!
          </p>
          <SurveyForm />
        </div>
      </StyledSurveyPageContainer>
    </>
  );
}

export default SurveyPage;
