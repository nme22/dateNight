import Head from 'next/head';

import { Heading, VStack, Text, Image } from '@chakra-ui/react';
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
               fontSize={{ base: 'sm', md: 'md', lg: 'lg', xl: 'xl' }}
               p={8}
            >
               <motion.div>
                  <Image src="/datingIMG.png" h="200px" w="200px" />
               </motion.div>
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
                  fontWeight="extrabold"
               >
                  This application is designed to help you keep track of your
                  romantic endevours. DateNight does thisby creating a personal
                  dating profile to help you remember your romantic progress!
                  This application uses the Yelp API to help browse potential
                  date ideas within the United States. Whether you're dating a
                  significant other or persuing your soulmate; record the date
                  to prevent your romantic life from becoming dry!
               </Text>
            </VStack>
         </motion.div>
      </>
   );
};

export default About;
