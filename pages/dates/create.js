import Head from 'next/head';
import Link from 'next/link';
import {
   Button,
   Divider,
   FormControl,
   FormLabel,
   Input,
   VStack,
   Heading,
   Textarea,
   Select,
   useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import supabase from '@lib/supabase';

const FormDate = () => {
   const toast = useToast();
   const [name, setName] = useState('');
   const [phoneNumber, setPhoneNumber] = useState('');
   const [location, setLocation] = useState('');
   const [when, setWhen] = useState('');
   const [what, setWhat] = useState('Food');
   const [again, setAgain] = useState('true');
   const [note, setNote] = useState('');
   const [activity, setActivity] = useState('');

   const [yelpData, setYelpData] = useState();

   async function createDate() {
      await supabase
         .from('dates')
         .insert([
            {
               activity,
               what,
               locations: location,
               name,
               contact: phoneNumber,
               timeDate: when,
               repeat: again,
               notes: note,
            },
         ])
         .single();
      toast({
         title: 'Date created.',
         description: 'Added date to your previous dates',
         status: 'success',
         duration: 9000,
         isClosable: true,
      });
   }

   function handleSearchWhat() {
      try {
         fetch('/api/events', {
            method: 'POST',
            body: JSON.stringify({ what, location }),
         })
            .then((response) => response.json())
            .then((data) => setYelpData(data));
         // console.log(yelpData);
         toast({
            title: 'Potential Date Ideas',
            description: 'Browse around the area ',
            status: 'info',
            duration: 9000,
            isClosable: true,
         });
      } catch (error) {
         console.error(error);
      }
   }

   function handleLocationChange(e) {
      setLocation(e.target.value);
   }
   function handleWhatChange(e) {
      setWhat(e.target.value);
   }

   function handleNameChange(e) {
      setName(e.target.value);
   }
   function handlePhoneNumberChange(e) {
      setPhoneNumber(e.target.value);
   }

   function handleWhenChange(e) {
      setWhen(e.target.value);
   }

   function handleNoteChange(e) {
      setNote(e.target.value);
   }
   function handleAgainChange(e) {
      setAgain(e.target.value);
   }
   function handleActivityChange(e) {
      setActivity(e.target.value);
   }
   return (
      <>
         <Head>
            <title>DateNight | Create a Date</title>
            <meta name="keywords" content="DateNight" />
         </Head>
         <VStack py={2} fontFamily="Nunito">
            <Heading size="2xl" color="palevioletred" fontFamily="Nunito">
               {' '}
               Create Your Date!{' '}
            </Heading>
            <Divider />
            <div>
               <FormControl>
                  <FormLabel color="palevioletred" fontWeight="bold">
                     What activity are we doing?:
                  </FormLabel>
                  <Select
                     _focus={{
                        borderColor: 'Pink',
                     }}
                     required
                     textAlign="center"
                     fontWeight="bold"
                     onChange={handleWhatChange}
                     value={what}
                  >
                     <option value="Food">Food</option>
                     <option value="Entertainment">Entertainment</option>
                     <option value="Romance">Romance</option>
                  </Select>

                  <FormLabel color="palevioletred" fontWeight="bold">
                     Pick a location in the United States
                  </FormLabel>
                  <Input
                     _focus={{
                        borderColor: 'Pink',
                     }}
                     type="text"
                     required
                     placeholder="Location"
                     value={location}
                     onChange={handleLocationChange}
                     fontWeight="bold"
                     isRequired="true"
                  />
                  <Button
                     d="block"
                     w="150px"
                     p="8px"
                     m="30px"
                     bg="palevioletred"
                     borderradius="4px"
                     color="white"
                     text-align="center"
                     _hover={{
                        bg: 'turquoise',
                     }}
                     onClick={handleSearchWhat}
                  >
                     See whats around!
                  </Button>

                  {yelpData ? (
                     <Select
                        value={activity}
                        onChange={handleActivityChange}
                        bg="palevioletred"
                        borderColor="palevioletred"
                        variant="outline"
                        color="whiteAlpha.900"
                        focusBorderColor="blue.300"
                     >
                        {yelpData.data.businesses.map((business) => (
                           <option key={business.id}>{business.name}</option>
                        ))}
                     </Select>
                  ) : null}

                  <Divider />
                  <FormLabel color="palevioletred" fontWeight="bold">
                     Name:
                  </FormLabel>
                  <Input
                     _focus={{
                        borderColor: 'Pink',
                     }}
                     type="text"
                     autoComplete="name"
                     required
                     placeholder="Name of person invited"
                     value={name}
                     onChange={handleNameChange}
                     fontWeight="bold"
                  />
                  <FormLabel color="palevioletred" fontWeight="bold">
                     Contact Number:
                  </FormLabel>
                  <Input
                     _focus={{
                        borderColor: 'Pink',
                     }}
                     type="text"
                     required
                     placeholder="Phone number of person invited"
                     value={phoneNumber}
                     onChange={handlePhoneNumberChange}
                     fontWeight="bold"
                  />

                  <FormLabel color="palevioletred" fontWeight="bold">
                     When we're doing this:
                  </FormLabel>
                  <Input
                     _focus={{
                        borderColor: 'Pink',
                     }}
                     type="datetime-local"
                     value={when}
                     onChange={handleWhenChange}
                     fontWeight="bold"
                  />
                  <FormLabel color="palevioletred" fontWeight="bold">
                     Would you go on this date again?
                  </FormLabel>
                  <Select
                     _focus={{
                        borderColor: 'Pink',
                     }}
                     type="boolean"
                     required
                     textAlign="center"
                     fontWeight="bold"
                     onChange={handleAgainChange}
                     value={again}
                  >
                     <option value="true">Yes</option>
                     <option value="false">No Shot</option>
                  </Select>

                  <FormLabel color="palevioletred" fontWeight="bold">
                     Notes:
                  </FormLabel>
                  <Textarea
                     _focus={{
                        borderColor: 'Pink',
                     }}
                     type="text"
                     placeholder="Noteable things that happened during the date"
                     fontWeight="bold"
                     onChange={handleNoteChange}
                     value={note}
                  />
                  {yelpData ? (
                     <Link href="/dates">
                        <Button
                           d="block"
                           w="150px"
                           p="8px"
                           m="30px"
                           bg="palevioletred"
                           borderradius="4px"
                           color="white"
                           text-align="center"
                           _hover={{
                              bg: 'turquoise',
                           }}
                           onClick={createDate}
                        >
                           Create Your Date!
                        </Button>
                     </Link>
                  ) : null}
               </FormControl>
            </div>
         </VStack>
      </>
   );
};

export default FormDate;
