import Link from 'next/link';

import { IconButton, colorMode, useColorMode, Box } from '@chakra-ui/react';

import { MoonIcon, SunIcon } from '@chakra-ui/icons';

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
         bgGradient="linear(to-r, red.300, blue.400 )"
         bgClip="text"
         fontWeight="extrabold"
         fontSize="sm"
      >
         <IconButton
            icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
            isRound="true"
            size="md"
            onClick={toggleColorMode}
            alignSelf="flex-end"
            bgGradient="linear(to-r, red.300, blue.400 )"
            _hover={{
               bg: 'turquoise',
            }}
            color="whiteAlpha.700"
         />

         <Link href="/">Home</Link>
         <Link href="/about">About</Link>
         <Link href="/dates/create">Create a Date</Link>
         <Link href="/dates">Previous Dates</Link>
      </Box>
   );
};

export default DateNavbar;
