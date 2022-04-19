import Head from 'next/head';
import {
   Heading,
   Divider,
   List,
   ListItem,
   ListIcon,
   Stack,
   HStack,
   Badge,
   Text,
   Flex,
   Spacer,
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
               <Flex
                  bgGradient="linear(to-l, red.300, blue.400 )"
                  borderRadius="lg"
                  flexWrap="nowrap"
                  justifyContent="space-evenly"
                  w={{ base: '10rem', md: '14rem', lg: '15rem', xl: '20rem' }}
                  h={{
                     base: '15rem',
                     md: '15rem',
                     lg: '15rem',
                     xl: '20rem',
                  }}
                  m={1}
                  p={1}
                  key={dates.id}
                  flexDirection="column"
               >
                  <Heading size="md" alignSelf="center">
                     {dates.name}
                  </Heading>
                  {dates.repeat == true ? (
                     <Badge colorScheme="green" alignSelf="center">
                        Date again
                     </Badge>
                  ) : (
                     <Badge colorScheme="red" alignSelf="center">
                        Never Again
                     </Badge>
                  )}
                  <List
                     bgColor="whiteAlpha.400"
                     borderRadius="md"
                     w="100%"
                     fontSize={{
                        base: '10px',
                        md: '12px',
                        lg: '14px',
                        xl: '16px',
                     }}
                  >
                     <ListItem>
                        <ListIcon as={PhoneIcon} />
                        {dates.timeDate}
                     </ListItem>
                     <ListItem>
                        <ListIcon as={PhoneIcon} />
                        {dates.contact}
                     </ListItem>
                     <ListItem>
                        <ListIcon as={FoodIcon} />
                        {dates.activity}
                     </ListItem>
                     <ListItem Spacing={2}>
                        <ListIcon as={FoodIcon} />
                        {dates.locations}
                     </ListItem>
                  </List>
                  <Text
                     fontSize={{
                        base: '10px',
                        md: '12px',
                        lg: '14px',
                        xl: '16px',
                     }}
                  >
                     {dates.notes}
                  </Text>
               </Flex>
            ))}
         </HStack>
      </>
   );
}
