import Link from 'next/link';
import Head from 'next/head';
import { Heading, Divider } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import supabase from '@lib/supabase';

export default function getDates() {
   const [dates, setDates] = useState([]);
   useEffect(() => {
      fetchDates();
   }, []);

   async function fetchDates() {
      const { data } = await supabase.from('dates').select();
      setDates(data);
      console.log('data:', data);
   }

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
            <Heading
               bgGradient="linear(to-l, red.300, blue.400 )"
               borderRadius="2xl"
               fontSize="2xl"
               p={1}
               mb={3}
               key={dates.id}
            >
               {dates.name}
            </Heading>
         ))}
      </div>
   );
}
