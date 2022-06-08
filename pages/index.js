import Head from 'next/head';
import Link from 'next/link';
import { VStack, Heading, Text, Button, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export default function Home() {
   return (
      <>
         <Head>
            <title>DateNight | Home</title>
            <meta name="keywords" content="DateNight" />
         </Head>
         <VStack>
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 3 }}
            >
               <Image
                  src="/datingIMG.png"
                  h="200px"
                  w="200px"
                  alt="image with a heart"
               />
               <Heading
                  fontSize={48}
                  textColor="palevioletred"
                  p="2px"
                  textAlign="center"
                  fontFamily="Nunito"
                  fontWeight="Bold"
                  bgGradient="linear(to-r, red.300, blue.400 )"
                  bgClip="text"
               >
                  DateNight
               </Heading>
            </motion.div>
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 6 }}
            >
               <Heading
                  textColor="palevioletred"
                  p="2"
                  fontSize={27}
                  textAlign="center"
                  fontFamily="Nunito"
                  fontWeight="Bold"
                  bgGradient="linear(to-r, red.300, blue.400 )"
                  bgClip="text"
               >
                  "Where moments become memories"
               </Heading>
            </motion.div>
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 6 }}
            >
               <Text
                  fontFamily="Nunito"
                  pb="20"
                  fontSize={{ base: 'sm', md: 'md', lg: 'lg', xl: 'xl' }}
                  bgGradient="linear(to-r, red.300, blue.400 )"
                  bgClip="text"
               >
                  Don't Pencilvester your memories; remember the barbaque. Plan
                  out your dates, send an invitation, and record your
                  experience!{' '}
               </Text>
            </motion.div>
            <Link href="/login">
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
                  Login
               </Button>
            </Link>
         </VStack>
      </>
   );
}
