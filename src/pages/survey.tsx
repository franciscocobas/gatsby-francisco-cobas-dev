import React from 'react';

import SEO from '../components/seo';
import SurveyForm from '../components/SurveyForm';
import FCLogo from '../images/fc-logo.svg';
import '../global.css';

function SurveyPage(): JSX.Element {
  return (
    <>
      <SEO
        description="This page es for showcasing the react-hook-form usage."
        title="Developer survey"
      />
      <div>
        <div className="main-wrapper">
          <div className="header">
            <img alt="Logo de Ceibal" className="logo" src={FCLogo} />
            <h1>
              FranciscoDev <span>Survey</span>
            </h1>
          </div>
          <p className="description">
            This survey is just for showcasing the react-hook-form use. The submitted data will not
            be public exposed in any form. I will collect this data to improve the content that I
            create. Thank you for taking your time and answer the questions!
          </p>
          <SurveyForm />
        </div>
      </div>
    </>
  );
}

export default SurveyPage;
