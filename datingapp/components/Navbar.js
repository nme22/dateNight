import Link from 'next/link';
import Image from 'next/image';
import { HStack, Button, useColorMode, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const DateNavbar = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Box
      h={{ base: '100%', md: '100%', lg: '100%' }}
      w={{ base: '100%', md: '100%', lg: '100%' }}
      p={4}
      d="flex"
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="space-around"
      fontFamily="Nunito"
      textColor="palevioletred"
    >
      <Button
        onClick={toggleColorMode}
        h="48px"
        w="64px"
        borderradius="25%"
        bg="palevioletred"
        _hover={{
          bg: 'turquoise',
        }}
      >
        <Image src="/datingIMG.png" alt="Heart" height="72px" width="64px" />
      </Button>

      <Link href="/">
        <Button
          d="block"
          h={{ base: '25%', md: '20%', lg: '15%' }}
          w={{ base: '25%', md: '20%', lg: '15%' }}
          p="8px"
          bg="palevioletred"
          borderradius="4px"
          color="white"
          text-align="center"
          _hover={{
            bg: 'turquoise',
          }}
        >
          Home
        </Button>
      </Link>
      <Link href="/About">
        <Button
          d="block"
          h={{ base: '25%', md: '20%', lg: '15%' }}
          w={{ base: '25%', md: '20%', lg: '15%' }}
          p="8px"
          bg="palevioletred"
          borderradius="5%"
          color="white"
          text-align="center"
          _hover={{
            bg: 'turquoise',
          }}
        >
          About
        </Button>
      </Link>
      <Link href="/FormDate">
        <Button
          d="block"
          h={{ base: '25%', md: '20%', lg: '15%' }}
          w={{ base: '25%', md: '20%', lg: '15%' }}
          p="8px"
          bg="palevioletred"
          borderradius="4px"
          color="white"
          text-align="center"
          _hover={{
            bg: 'turquoise',
          }}
        >
          Create a Date
        </Button>
      </Link>
      <Link href="/Dates">
        <Button
          d="block"
          h={{ base: '25%', md: '20%', lg: '15%' }}
          w={{ base: '25%', md: '20%', lg: '15%' }}
          p="8px"
          bg="palevioletred"
          borderradius="4px"
          textAlign="center"
          color="white"
          _hover={{
            bg: 'turquoise',
          }}
        >
          Previous Dates
        </Button>
      </Link>
    </Box>
  );
};

export default DateNavbar;
