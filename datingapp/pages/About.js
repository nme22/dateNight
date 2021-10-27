import Head from 'next/head';
import { Heading, VStack, Text } from '@chakra-ui/react';
const About = () => {
  return (
    <>
      <Head>
        <title>DateNight | About</title>
        <meta name="keywords" content="DateNight" />
      </Head>
      <VStack justifyContent="center" fontFamily="Nunito" fontSize="2xl">
        <Heading p="20px" color="palevioletred">
          About
        </Heading>
        <Text color="black">
          This application is designed to help the user keep track of their
          romantic endevours by creating a personal dating profile to help you
          remember your romantic progress! This application uses the Yelp API to
          help browse potential date ideas, coordinate a date night properly,
          and record the date to prevent your romance from being dry!
        </Text>
      </VStack>
    </>
  );
};

export default About;
