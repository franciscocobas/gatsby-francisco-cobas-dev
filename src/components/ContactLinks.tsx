import React from 'react';
import styled from 'styled-components';

import MailLogo from '../images/mail.svg';
import GithubLogo from '../images/github.svg';
import LinkedinLogo from '../images/linkedin-logo.svg';

const ContactLinks = () => {
  return (
    <>
      <a href='mailto:fcarocena@gmail.com' target='_blank'>
        <img src={MailLogo} />
      </a>
      <a
        href='https://github.com/franciscocobas'
        target='_blank'
        rel='noreferrer'
      >
        <img src={GithubLogo} />
      </a>
      <a
        href='https://www.linkedin.com/in/franciscocobas/'
        target='_blank'
        rel='noreferrer'
      >
        <img src={LinkedinLogo} />
      </a>
    </>
  );
};

export default ContactLinks;
