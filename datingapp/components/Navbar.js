import Link from 'next/link';
import Image from 'next/image';
import { HStack, Button, useColorMode } from '@chakra-ui/react';

const DateNavbar = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <HStack
      w="full"
      h={50}
      p={4}
      spacing={6}
      justifyContent="space-around"
      fontFamily="Nunito"
      textColor="palevioletred"
    >
      <Button
        onClick={toggleColorMode}
        h="300%"
        w="80px"
        borderradius="35%"
        bg="white"
        _hover={{
          bg: 'turquoise',
        }}
      >
        <Image
          src="/datingIMG.png"
          alt="Heart"
          height="70px"
          width="70px"
          borderradius="50%"
        />
      </Button>

      <Link href="/">
        <Button
          d="block"
          w="150px"
          p="8px"
          m="30px"
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
          w="150px"
          p="8px"
          m="30px"
          bg="palevioletred"
          borderradius="4px"
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
          w="150px"
          p="8px"
          m="30px"
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
          w="150px"
          p="8px"
          m="30px"
          bg="palevioletred"
          borderradius="4px"
          color="white"
          text-align="center"
          _hover={{
            bg: 'turquoise',
          }}
        >
          Previous Dates
        </Button>
      </Link>
    </HStack>
  );
};

export default DateNavbar;
