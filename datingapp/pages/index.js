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
        >
          "Where Moments Become Memories"{' '}
        </Heading>
        <Text fontFamily="Nunito" pb="20" fontSize="2xl" color="palevioletred">
          Don't Pencilvester your memories; remember the barbaque. Plan out your
          dates, send an invitation, and record your experience!{' '}
        </Text>
        <HStack d="flex" alignContent="center" p="8px">
          <motion.div
            whileHover={{ scale: 1.3, rotate: 360 }}
            whileTap={{
              scale: 0.8,
              rotate: -90,
              borderRadius: '100%',
            }}
          >
            <Image
              src="/datingIMG.png"
              alt="Heart"
              height="70px"
              width="70px"
            />
          </motion.div>
        </HStack>

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
