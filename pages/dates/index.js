import Link from 'next/link';
import Head from 'next/head';
import {
   Heading,
   Divider,
   List,
   ListItem,
   ListIcon,
   Stack,
   HStack,
   Fade,
   ScaleFade,
   Slide,
   SlideFade,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { PhoneIcon, FoodIcon } from '@chakra-ui/react';
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
      <>
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
         <HStack flexWrap="wrap">
            <Head>
               <title>DateNight | Previous Dates</title>
               <meta name="keywords" content="DateNight" />
            </Head>

            {dates.map((dates) => (
               <Stack
                  bgGradient="linear(to-l, red.300, blue.400 )"
                  borderRadius="lg"
                  borderColor="whiteAlpha.300"
                  borderWidth="2px"
                  fontSize="md"
                  flexWrap="wrap"
                  justifyContent="center"
                  width="200px"
                  height="200px"
                  key={dates.id}
                  mr={1}
                  m={1}
               >
                  <Stack>
                     <Heading size="md" alignSelf="center">
                        {dates.name}
                     </Heading>
                     <List spacing={3} bgColor="whiteAlpha.300">
                        <ListItem>
                           <ListIcon as={PhoneIcon} />
                           {dates.timeDate}
                        </ListItem>
                        <ListItem>
                           <ListIcon as={PhoneIcon} />
                           {dates.contact}
                        </ListItem>
                        <ListItem Spacing={2}>
                           <ListIcon Icon={FoodIcon} />
                           Activity:
                           {dates.activity}
                        </ListItem>
                     </List>
                     <label>Notes:</label>
                     <p>{dates.notes}</p>
                  </Stack>
               </Stack>
            ))}
         </HStack>
      </>
   );
}
