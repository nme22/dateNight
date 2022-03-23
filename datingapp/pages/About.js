import Head from 'next/head';
import { Heading, VStack, Text, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const About = () => {
   return (
      <>
         <Head>
            <title>DateNight | About</title>
            <meta name="keywords" content="DateNight" />
         </Head>
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4 }}
         >
            <VStack
               justifyContent="center"
               fontFamily="Nunito"
               fontSize="2xl"
               p={8}
            >
               <Heading
                  p="20px"
                  bgGradient="linear(to-r, red.300, blue.400 )"
                  bgClip="text"
               >
                  About
               </Heading>

               <Text
                  bgGradient="linear(to-r, red.300, blue.400 )"
                  bgClip="text"
                  fontSize="3xl"
                  fontWeight="extrabold"
               >
                  This application is designed to help the user keep track of
                  their romantic endevours by creating a personal dating profile
                  to help you remember your romantic progress! This application
                  uses the Yelp API to help browse potential date ideas,
                  coordinate a date night properly, and record the date to
                  prevent your romance from being dry!
               </Text>
            </VStack>
         </motion.div>
      </>
   );
};

export default About;
