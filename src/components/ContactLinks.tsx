import React from 'react';
import { Image, Link } from '@chakra-ui/react';

import MailLogo from '../images/mail.svg';
import GithubLogo from '../images/github.svg';
import LinkedinLogo from '../images/linkedin-logo.svg';
import TwitchLogo from '../images/twitch.svg';

const ContactLinks = () => {
  return (
    <>
      <Link href="mailto:fcarocena@gmail.com" rel="noreferrer" target="_blank">
        <Image alt="Logo del Mail" src={MailLogo} w={8} />
      </Link>
      <Link href="https://github.com/franciscocobas" rel="noreferrer" target="_blank">
        <Image alt="Logo de Github" h={8} src={GithubLogo} w={8} />
      </Link>
      <Link href="https://www.linkedin.com/in/franciscocobas/" rel="noreferrer" target="_blank">
        <Image alt="Logo de Linkedin" h={8} src={LinkedinLogo} w={8} />
      </Link>
      <Link href="https://www.twitch.tv/franciscodev_uy/" rel="noreferrer" target="_blank">
        <Image alt="Logo de Linkedin" h={8} src={TwitchLogo} w={8} />
      </Link>
    </>
  );
};

export default ContactLinks;
