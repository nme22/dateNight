import Head from 'next/head';
import Link from 'next/link';
import { VStack, Heading, Text, Button, HStack, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export default function Home() {
  const icon = {
    hidden: {
      pathLength: 0,
      fill: 'rgba(255, 255, 255, 0)',
    },
    visible: {
      pathLength: 1,
      fill: 'rgba(255, 255, 255, 1)',
    },
  };
  return (
    <>
      <VStack>
        <Head>
          <title>DateNight | Home</title>
          <meta name="keywords" content="DateNight" />
        </Head>

        <Heading
          textColor="palevioletred"
          p="20"
          textAlign="center"
          fontFamily="Nunito"
          fontWeight="Bold"
          bgGradient="linear(to-r, red.300, blue.400 )"
          bgClip="text"
        >
          "Where Moments Become Memories"{' '}
        </Heading>
        <Text
          fontFamily="Nunito"
          pb="20"
          fontSize="2xl"
          bgGradient="linear(to-r, red.300, blue.400 )"
          bgClip="text"
          fontSize="2xl"
        >
          Don't Pencilvester your memories; remember the barbaque. Plan out your
          dates, send an invitation, and record your experience!{' '}
        </Text>

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
            About DateNight
          </Button>
        </Link>
      </VStack>
    </>
  );
}
