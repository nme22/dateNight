import Head from 'next/head';
import {
   Heading,
   Divider,
   List,
   ListItem,
   ListIcon,
   Badge,
   Text,
   Box,
   Flex,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FaGlobeAmericas } from 'react-icons/fa';
import { CalendarIcon, PhoneIcon, InfoIcon } from '@chakra-ui/icons';
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
         <Flex flexWrap="wrap" justifyContent="center">
            <Head>
               <title>DateNight | Previous Dates</title>
               <meta name="keywords" content="DateNight" />
            </Head>

            {dates.map((dates) => (
               <Box
                  as="div"
                  bgGradient="linear(to-l, red.300, blue.400 )"
                  borderRadius="lg"
                  d="flex"
                  flexDirection="column"
                  w={{ base: '10rem', md: '14rem', lg: '15rem', xl: '20rem' }}
                  h={{
                     base: '15rem',
                     md: '15rem',
                     lg: '15rem',
                     xl: '20rem',
                  }}
                  my={1}
                  m={1}
                  p={2}
                  key={dates.id}
                  opacity=".7"
                  _hover={{ opacity: '1' }}
                  cursor="grabbing"
                  fontFamily="Nunito"
               >
                  <Heading
                     size="md"
                     alignSelf="center"
                     fontSize={{
                        base: '10px',
                        md: '12px',
                        lg: '14px',
                        xl: '20px',
                     }}
                  >
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
                  <br />
                  <List
                     bgColor="whiteAlpha.400"
                     borderRadius="md"
                     w="100%"
                     p={2}
                     fontSize={{
                        base: '10px',
                        md: '12px',
                        lg: '14px',
                        xl: '16px',
                     }}
                  >
                     <ListItem>
                        <ListIcon as={CalendarIcon} />
                        {dates.timeDate}
                     </ListItem>
                     <ListItem>
                        <ListIcon as={PhoneIcon} />
                        {dates.contact}
                     </ListItem>
                     <ListItem>
                        <ListIcon as={InfoIcon} />
                        {dates.activity}
                     </ListItem>
                     <ListItem>
                        <ListIcon as={FaGlobeAmericas} />
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
                     Notes:
                  </Text>
                  <Text
                     fontSize={{
                        base: '10px',
                        md: '12px',
                        lg: '14px',
                        xl: '16px',
                     }}
                     w="fit-content"
                     fontFamily="Nunito"
                  >
                     {dates.notes}
                  </Text>
               </Box>
            ))}
         </Flex>
      </>
   );
}
