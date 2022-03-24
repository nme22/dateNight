import Link from 'next/link';
import Head from 'next/head';
import { Heading, Divider } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { supabase } from '../../src/client';

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
}
