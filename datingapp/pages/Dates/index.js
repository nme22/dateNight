import Link from 'next/link';
import Head from 'next/head';
import { Heading, Divider, VStack, HStack } from '@chakra-ui/react';
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
            size="2xl"
            p={2}
            mb={3}
         >
            All Dates
         </Heading>
         <Divider />
         {dates.map((dates) => (
            <VStack
               bgGradient="linear(to-l, red.300, blue.400 )"
               borderRadius="md"
               fontSize="lg"
               fontFamily="heading"
               justifyContent="space-around"
               p={2}
               m={3}
               key={dates.id}
            >
               <Heading size="lg">{dates.name}</Heading>
               <HStack>
                  <label>Date:</label>
                  <h2>{dates.timeDate}</h2>
               </HStack>
               <HStack>
                  <label>Contact:</label>
                  <h2>{dates.contact}</h2>
               </HStack>
               <HStack>
                  <label>Activity:</label>
                  <h3>{dates.activity}</h3>
               </HStack>
               <HStack>
                  <label>notes:</label>
                  <p>{dates.notes}</p>
               </HStack>
            </VStack>
         ))}
      </div>
   );
}
