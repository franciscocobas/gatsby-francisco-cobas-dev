import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Box, Grid, Image, Heading, Text, Stack, Link, GridItem, List } from '@chakra-ui/react';

import '../global.css';

import SEO from '../components/seo';
import ContactLinks from '../components/ContactLinks';
import FCLogo from '../images/fc-logo.svg';
import CeibalLogo from '../images/logo-horizontal-ceibal.svg';
import FastcallLogo from '../images/logo-fastcall.svg';
import DeviceMagicLogo from '../images/logo-device-magic.svg';

const IndexPage = () => {
  function vibrate() {
    navigator.vibrate(100);
  }

  return (
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
              Lately I’ve been working as a cooperative partener at SUBTE and doing freelancing
              jobs.
            </Text>
          </GridItem>
          <GridItem gridArea="fotoPerfil">
            <StaticImage alt="Foto retrato mía" src="../images/foto-perfil.webp" />
          </GridItem>
        </Grid>
        <Box as="hr" maxW={'60%'} mx="auto" my={16} />
        <Box as="section" maxW={'container.xl'} mx={['10', 'auto']}>
          <Heading fontSize={['3xl', '5xl']} textAlign="center">
            Currently Working at
          </Heading>
          <Stack
            alignItems={'center'}
            direction={['column', 'row']}
            justifyContent={'center'}
            mt={10}
            spacing={['10', '20']}
          >
            <Link
              href="https://subte.uy/"
              rel="noopener noreferrer"
              sx={{
                '& img[data-main-image]': {
                  filter: 'grayscale(100%)',
                  transition: 'all .25s linear',
                  borderRadius: '50%',
                },
                '&:hover img': { filter: 'grayscale(0%)' },
              }}
              target="_blank"
              w={60}
              onClick={vibrate}
              onMouseOver={vibrate}
            >
              <StaticImage
                alt="Logo cooperativa de trabajo SUBTE"
                src="../images/PerfilSubte.webp"
              />
            </Link>
            <Link
              href="https://ha.dev/"
              rel="noopener noreferrer"
              sx={{
                '& img[data-main-image]': {
                  filter: 'grayscale(100%)',
                  transition: 'all .25s linear',
                  borderRadius: '50%',
                },
                '&:hover img': { filter: 'grayscale(0%)' },
              }}
              target="_blank"
              w={60}
              onClick={vibrate}
              onMouseOver={vibrate}
            >
              <StaticImage alt="Logo de Hack Academy" src="../images/ha.webp" />
            </Link>
          </Stack>
        </Box>
        <Box as="hr" maxW={'60%'} mx="auto" my={16} />
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
              <Image alt="Logo Fastcall" src={FastcallLogo} w={[72, 80]} />
            </Link>
            <Link href="https://www.devicemagic.com/" rel="noopener noreferrer" target="_blank">
              <Image alt="Logo Device Magic" src={DeviceMagicLogo} w={[72, 80]} />
            </Link>
          </Stack>
        </Box>
        <Box as="hr" maxW={'60%'} mx="auto" my={16} />

        <Box
          alignItems="center"
          as="section"
          display="flex"
          flexDirection="column"
          maxW={'container.xl'}
          mx={['10', 'auto']}
          pb={16}
        >
          <Heading fontSize={['3xl', '4xl']} position="relative" textAlign="center">
            Intersted in build something with <br />
            <Box
              _after={{
                position: 'absolute',
                content: '""',
                width: '120px',
                height: '0px',
                background: '#61dafb',
                bottom: '-5px',
                left: '-10px',
                transition: 'all 0.2s ease-in-out',
                borderRadius: '3px',
              }}
              _hover={{
                _after: {
                  height: '3px',
                },
              }}
              as="span"
            >
              React
            </Box>
            ,{' '}
            <Box
              _after={{
                position: 'absolute',
                content: '""',
                width: '0px',
                height: '3px',
                background: '#3178c6',
                bottom: '-5px',
                left: '110px',
                transition: 'all 0.2s ease-in-out',
                borderRadius: '3px',
              }}
              _hover={{
                _after: {
                  width: '190px',
                },
              }}
              as="span"
            >
              Typescript
            </Box>{' '}
            and{' '}
            <Box
              _after={{
                position: 'absolute',
                content: '""',
                width: '130px',
                height: '3px',
                backgroundColor: 'transparent',
                bottom: '-5px',
                right: '225px',
                transition: 'all 0.2s ease-in-out',
                borderRadius: '3px',
              }}
              _hover={{
                _after: {
                  backgroundColor: 'white',
                },
              }}
              as="span"
            >
              NextJS
            </Box>{' '}
            or{' '}
            <Box
              _after={{
                position: 'absolute',
                content: '""',
                width: '0px',
                height: '3px',
                background: '#7026B9',
                bottom: '-5px',
                right: '-5px',
                transition: 'all 0.2s ease-in-out',
                borderRadius: '3px',
              }}
              _hover={{
                _after: {
                  width: '190px',
                },
              }}
              as="span"
            >
              GatsbyJS
            </Box>
            ?
          </Heading>
          <Link
            _hover={{ textDecoration: 'none' }}
            bg="white"
            borderRadius="5px"
            color="black"
            display="inline-block"
            fontSize={'xl'}
            href={`mailto:fcarocena@gmail.com?&subject=Hello Francisco, let's go to the 🌔with this project!`}
            mt={10}
            px="10"
            py="2"
            textAlign="center"
            w="48"
          >
            Contact me
          </Link>
        </Box>
        <Box as="footer" pb={6}>
          <Text color="whiteAlpha.400" mx={10} textAlign="center">
            Site designed and developed by{' '}
            <Link
              _hover={{ textDecoration: 'none' }}
              href="https://twitter.com/mrRobotUy"
              rel="noopener noreferrer"
              target="_blank"
            >
              @mrRobotUy
            </Link>{' '}
            using{' '}
            <Link
              _hover={{ textDecoration: 'none' }}
              href="https://www.gatsbyjs.com/"
              target="_blank"
            >
              Gatsby
            </Link>{' '}
            and{' '}
            <Link _hover={{ textDecoration: 'none' }} href="https://chakra-ui.com/" target="_blank">
              chakra UI
            </Link>
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default IndexPage;
