import React from 'react';

import MailLogo from '../images/mail.svg';
import GithubLogo from '../images/github.svg';
import LinkedinLogo from '../images/linkedin-logo.svg';
import TwitchLogo from '../images/twitch.svg';

const ContactLinks = () => {
  return (
    <>
      <a href="mailto:fcarocena@gmail.com" rel="noreferrer" target="_blank">
        <img alt="Logo del Mail" src={MailLogo} />
      </a>
      <a href="https://github.com/franciscocobas" rel="noreferrer" target="_blank">
        <img alt="Logo de Github" src={GithubLogo} />
      </a>
      <a href="https://www.linkedin.com/in/franciscocobas/" rel="noreferrer" target="_blank">
        <img alt="Logo de Linkedin" src={LinkedinLogo} />
      </a>
      <a href="https://www.twitch.tv/franciscodev_uy/" rel="noreferrer" target="_blank">
        <img alt="Logo de Linkedin" src={TwitchLogo} />
      </a>
    </>
  );
};

export default ContactLinks;
