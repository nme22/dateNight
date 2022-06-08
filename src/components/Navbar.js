import Link from 'next/link';
import { useState, useEffect } from 'react';
import { supabase } from '@utils/supabaseClient';
import { IconButton, colorMode, useColorMode, Box } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

const DateNavbar = () => {
   const { colorMode, toggleColorMode } = useColorMode();
   const [session, setSession] = useState(null);
   useEffect(() => {
      setSession(supabase.auth.session());
      supabase.auth.onAuthStateChange((_event, session) => {
         setSession(session);
      });
   }, []);
   if (session) {
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
               icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
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
            <Link href="/dates"> Dates</Link>
         </Box>
      );
   } else {
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
               icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
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
         </Box>
      );
   }
};

export default DateNavbar;
