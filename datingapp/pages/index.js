import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { VStack, Heading, Text } from '@chakra-ui/react';

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
          pb="20"
          textAlign="center"
          fontFamily="Nunito"
        >
          "Where Moments Become Memories"{' '}
        </Heading>
        <Text fontFamily="Nunito" pb="20">
          Don't Pencilvester your memories; remember the barbaque. Plan out your
          dates, send an invitation, and record your experience!{' '}
        </Text>

        <Link href="/About">
          <a className={styles.btn}>About DateNight</a>
        </Link>
      </VStack>
    </>
  );
}
