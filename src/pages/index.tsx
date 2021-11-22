import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import {
  Box,
  Container,
  Grid,
  Image,
  Heading,
  Text,
  Flex,
  Stack,
  Link,
  GridItem,
  List,
  ListItem,
} from '@chakra-ui/react';

import '../global.css';

import SEO from '../components/seo';
import ContactLinks from '../components/ContactLinks';
import FCLogo from '../images/fc-logo.svg';
import CeibalLogo from '../images/logo-horizontal-ceibal.svg';
import FastcallLogo from '../images/logo-fastcall.svg';
import DeviceMagicLogo from '../images/logo-device-magic.svg';

const IndexPage = () => (
  <>
    <SEO />
    <Box bg="black">
      <Grid
        gridTemplateAreas={[
          "'logo contactLinks' 'title title' 'fotoPerfil fotoPerfil' 'textPresentation textPresentation'",
          "'logo fotoPerfil' 'title fotoPerfil' 'textPresentation fotoPerfil' 'contactLinks fotoPerfil'",
        ]}
        gridTemplateColumns={['1fr 1fr', '1fr 1fr']}
        maxW="container.xl"
        minH={'100vh'}
        mx={[8, 'auto']}
        pb={8}
        pt={[6]}
      >
        <GridItem as="header" gridArea="logo" ml={[0, 14]}>
          <Image alt="Logo Francisco Cobas" src={FCLogo} w={[20, 28]} />
        </GridItem>
        <GridItem alignSelf={'center'} gridArea="contactLinks">
          <List display="flex" flexDirection="row" justifyContent={['flex-end', 'center']}>
            <ContactLinks />
          </List>
        </GridItem>
        <GridItem gridArea="title" ml={[0, 14]}>
          <Heading fontSize={['5xl', '7xl']} mt={4} textAlign={['center', 'left']}>
            Welcome back
          </Heading>
        </GridItem>
        <GridItem gridArea="textPresentation" maxW={['100%', '70%']} ml={[0, 14]}>
          <Text fontSize={'xl'} my={6}>
            Hello! I’m Francisco Cobas, I do web development writing Javascript & Typescript code.
          </Text>
          <Text fontSize={'xl'} mb={6}>
            I have a considerable experience working with React in a wide range of projects.
          </Text>
          <Text fontSize={'xl'} mb={6}>
            Also I have a background of Operating System experience wich combine perfectly with my
            front end abilities. I worked in many industries such as SaaS products, Marketing,
            Healthcare, Education and more.
          </Text>
          <Text fontSize={'xl'} mb={6}>
            Lately I’ve been working as a cooperative partener at SUBTE and doing freelancing jobs.
          </Text>
        </GridItem>
        <GridItem gridArea="fotoPerfil">
          <StaticImage alt="Foto retrato mía" src="../images/foto-perfil.webp" />
        </GridItem>
      </Grid>
      <Box as="hr" maxW={'60%'} mx="auto" my={10} />
      <Box as="section" maxW={'container.xl'} mx={['10', 'auto']}>
        <Heading fontSize={['3xl', '5xl']} textAlign="center">
          Companies that trusted on me
        </Heading>
        <Stack
          alignItems={'center'}
          direction={['column', 'row']}
          justifyContent={'center'}
          mt={10}
          spacing={['10', '20']}
        >
          <Link href="https://www.ceibal.edu.uy/" rel="noopener noreferrer" target="_blank">
            <Image alt="Logo Ceibal" src={CeibalLogo} w={[72, 80]} />
          </Link>
          <Link href="https://fastcall.com/" rel="noopener noreferrer" target="_blank">
            <Image alt="Logo Ceibal" src={FastcallLogo} w={[72, 80]} />
          </Link>
          <Link href="https://www.devicemagic.com/" rel="noopener noreferrer" target="_blank">
            <Image alt="Logo Ceibal" src={DeviceMagicLogo} w={[72, 80]} />
          </Link>
        </Stack>
      </Box>
      <Box as="hr" maxW={'60%'} mx="auto" my={10} />
      <Box
        alignItems="center"
        as="section"
        display="flex"
        flexDirection="column"
        maxW={'container.xl'}
        mx={['10', 'auto']}
        pb={10}
      >
        <Heading fontSize={['3xl', '4xl']} textAlign="center">
          Do you want to build a project together?
        </Heading>
        <Link
          _hover={{ textDecoration: 'none' }}
          bg="white"
          borderRadius="5px"
          color="black"
          display="inline-block"
          fontSize={'xl'}
          mt={10}
          px="10"
          py="2"
          textAlign="center"
          w="48"
        >
          Contact me
        </Link>
      </Box>
    </Box>
  </>
);

export default IndexPage;
