import Head from 'next/head';
import Link from 'next/link';
import { VStack, Heading, Text, Button } from '@chakra-ui/react';

export default function Home() {
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
        <Text fontFamily="Nunito" pb="20" fontWeight="bold">
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
