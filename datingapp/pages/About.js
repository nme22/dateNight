import Head from 'next/head';
import { Heading, VStack, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import * as react from 'react';
const About = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
    >
      <Head>
        <title>DateNight | About</title>
        <meta name="keywords" content="DateNight" />
      </Head>
      <VStack justifyContent="center" fontFamily="Nunito" fontSize="2xl">
        <Heading p="20px" color="palevioletred">
          About
        </Heading>

        <Text color="palevioletred" alignContent="center">
          This application is designed to help the user keep track of their
          romantic endevours by creating a personal dating profile to help you
          remember your romantic progress! This application uses the Yelp API to
          help browse potential date ideas, coordinate a date night properly,
          and record the date to prevent your romance from being dry!
        </Text>
      </VStack>
    </motion.div>
  );
};

export default About;
