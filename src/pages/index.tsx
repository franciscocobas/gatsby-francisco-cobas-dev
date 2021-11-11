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
      <Container maxW="1440px" pl="16">
        <Box as="section">
          <Grid gridTemplateColumns={['repeat(12, 1fr)']}>
            <GridItem colSpan={4} mt={16}>
              <Box mb={4}>
                <Image
                  alt="Logo de Francisco Cobas"
                  display={['none', 'block']}
                  height={125}
                  src={FCLogo}
                  width={125}
                />
                <Image
                  alt="Logo de Francisco Cobas"
                  display={['block', 'none']}
                  height={70}
                  src={FCLogo}
                  width={70}
                />
              </Box>
              <Box display={['block', 'none']}>
                <ContactLinks />
              </Box>

              <Flex direction="column">
                <Heading as="h1" color="white" fontSize="6xl" mb={6}>
                  Welcome back
                </Heading>
                <Box display={['block', 'none']}>
                  <StaticImage alt="Foto de perfil" src="../images/foto-perfil.webp" />
                </Box>
                <Text fontSize="lg" pb={4}>
                  Hello! I’m Francisco Cobas, I do web development writing Javascript & Typescript
                  code.
                </Text>
                <Text fontSize="lg" pb={4}>
                  I have a considerable experience working with React in a wide range of projects.
                </Text>
                <Text fontSize="lg" pb={4}>
                  Also I have a background of Operating System experience wich combine perfectly
                  with my front end abilities. I worked in many industries such as SaaS products,
                  Marketing, Healthcare, Education and more.
                </Text>
                <Text fontSize="lg" pb={12}>
                  Lately I’ve been working as a cooperative partener at SUBTE and doing freelancing
                  jobs.
                </Text>
                <Stack direction={['row']} justifyContent="center" spacing={5}>
                  <ContactLinks />
                </Stack>
              </Flex>
            </GridItem>
            <GridItem colEnd={13} colStart={6}>
              <StaticImage alt="Foto de perfil" src="../images/foto-perfil.webp" />
            </GridItem>
          </Grid>
        </Box>

        <Box alignItems="center" as="section" display="flex" flexDirection={'column'}>
          <Box as="span" borderTop="1px solid white" my={10} w="50%" />
          <Heading my={10}>Companies that trusted on me</Heading>
          <Stack direction="row" spacing={14}>
            <Link href="https://www.ceibal.edu.uy/" rel="noopener noreferrer" target="_blank">
              <Image alt="Logo de Ceibal" height="112" src={CeibalLogo} width="367" />
            </Link>
            <Link href="https://fastcall.com/" rel="noopener noreferrer" target="_blank">
              <Image alt="Logo de Fastcall" height="78" src={FastcallLogo} width="367" />
            </Link>
            <Link href="https://www.devicemagic.com/" rel="noopener noreferrer" target="_blank">
              <Image alt="Logo de Device Magic" height="78" src={DeviceMagicLogo} width="367" />
            </Link>
          </Stack>
        </Box>
        <Box alignItems="center" as="section" display="flex" flexDirection="column" pb={20}>
          <Box as="span" borderTop="1px solid white" my={10} w="50%" />
          <Heading as="h2" my={10}>
            Do you want to build a project together?
          </Heading>
          <Link
            _hover={{ textDecoration: 'none' }}
            bg="white"
            borderRadius="5"
            color="black"
            href={`mailto:fcarocena@gmail.com?&subject=Hello Francisco, let's go to the 🌔with this project!`}
            px={16}
            py={2}
            rel="noreferrer"
            target="_blank"
          >
            Contact me
          </Link>
        </Box>
      </Container>
    </Box>
  </>
);

export default IndexPage;
