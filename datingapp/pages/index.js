import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { VStack, Heading, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <Head>
        <title>DateNight | Home</title>
        <meta name="keywords" content="DateNight" />
      </Head>
      <VStack>
        <Heading color="palevioletred" pb="20" textAlign="center">
          "Where Moments Become Memories"{' '}
        </Heading>
        <Text>
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
