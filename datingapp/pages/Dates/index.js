import styles from '../../styles/Dates.module.css';
import Link from 'next/link';
import Head from 'next/head';
import { Heading, Divider, VStack, Box } from '@chakra-ui/react';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  /* Where we will pull all the previous dates from*/
  const data = await res.json();

  return {
    props: { dates: data },
  };
};
const getDates = ({ dates }) => {
  return (
    <div>
      <Head>
        <title>DateNight | Previous Dates</title>
        <meta name="keywords" content="DateNight" />
      </Head>
      <Heading
        fontFamily="Nunito"
        bgGradient="linear(to-l, red.300, blue.400 )"
        bgClip="text"
        p={2}
        mb={3}
      >
        All Dates
      </Heading>
      <Divider />
      {dates.map((dates) => (
        <Link href={'/Dates/' + dates.id} key={dates.id}>
          <Heading
            bgGradient="linear(to-l, red.300, blue.400 )"
            borderRadius={50}
            fontSize="2xl"
            p={1}
            mb={3}
          >
            {dates.name}
          </Heading>
        </Link>
      ))}
    </div>
  );
};

export default getDates;
