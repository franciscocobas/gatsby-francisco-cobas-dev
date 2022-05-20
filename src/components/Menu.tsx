import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IconButton, List, ListItem, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link } from 'gatsby';

function Menu({ pathname }: { pathname: string }): JSX.Element {
  const { getDisclosureProps, isOpen, onClose, onOpen } = useDisclosure();
  const [hidden, setHidden] = useState(!isOpen);

  return (
    <>
      <IconButton
        _active={{ background: 'transparent' }}
        _focus={{ boxShadow: 'none' }}
        _hover={{ background: 'transparent' }}
        aria-label="Menu button"
        bg="transparent"
        color={pathname === '/' ? 'white' : 'black'}
        position="fixed"
        right={14}
        top={8}
      >
        <HamburgerIcon
          h={10}
          w={10}
          onClick={(e) => {
            e.stopPropagation();
            onOpen();
          }}
        />
      </IconButton>
      <motion.div
        {...getDisclosureProps()}
        animate={{ width: isOpen ? '100%' : 0 }}
        hidden={hidden}
        initial={false}
        style={{
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          position: 'fixed',
          right: '0',
          height: '100vh',
          top: '0',
        }}
        transition={{ duration: 0.75, type: 'tween', ease: 'backInOut' }}
        onAnimationComplete={() => setHidden(!isOpen)}
        onAnimationStart={() => setHidden(false)}
        onClick={onClose}
      >
        <motion.div
          animate={{ background: pathname === '/' ? '#fff' : '#000' }}
          className="menu-container"
          style={{
            background: 'white',
            color: pathname === '/' ? 'black' : 'white',
            height: '100%',
            position: 'absolute',
            right: '0',
          }}
          transition={{ duration: 0.75, type: 'tween', ease: 'backInOut' }}
          onClick={(e) => e.stopPropagation()}
        >
          <List m="14">
            <ListItem
              borderBottom="0.5px solid black"
              borderColor={pathname === '/' ? 'black' : 'white'}
              fontFamily="IBMPlexExtraLight"
              fontSize="6xl"
            >
              <Link activeClassName="link-active" to="/" onClick={() => onClose()}>
                Home
              </Link>
            </ListItem>
            <ListItem fontFamily="IBMPlexExtraLight" fontSize="6xl">
              <Link activeClassName="link-active" to="/blog" onClick={() => onClose()}>
                Blog
              </Link>
            </ListItem>
          </List>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Menu;
