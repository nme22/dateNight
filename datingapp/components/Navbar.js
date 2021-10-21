import Link from 'next/link';
import Image from 'next/image';
import {
  HStack,
  Button,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { Styles } from '@chakra-ui/react';

const DateNavbar = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('gray.500', 'whitealpha.50');
  return (
    <HStack w="full" h={50} p={4} spacing={6} justifyContent="space-around">
      <Button onClick={toggleColorMode} h="300%" w="80px" borderradius="35%">
        <Image
          src="/datingIMG.png"
          alt="Heart"
          height="70px"
          width="70px"
          borderradius="50%"
        />
      </Button>

      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/About">
        <a>About</a>
      </Link>
      <Link href="/FormDate">
        <a>Create A Date</a>
      </Link>
      <Link href="/Dates">
        <a>Previous Dates</a>
      </Link>
    </HStack>
  );
};

export default DateNavbar;
