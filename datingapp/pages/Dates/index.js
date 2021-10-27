import styles from '../../styles/Dates.module.css';
import Link from 'next/link';
import Head from 'next/head';
import { Heading, Divider, VStack } from '@chakra-ui/react';

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
      <Heading fontFamily="Nunito" fontWeight="bold" color="gray.500">
        All Dates
      </Heading>
      <Divider />
      {dates.map((dates) => (
        <Link href={'/Dates/' + dates.id} key={dates.id}>
          <a className={styles.single}>
            <h3>{dates.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default getDates;
