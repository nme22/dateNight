import Link from 'next/link';
import Head from 'next/head';
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
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const FormDate = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [when, setWhen] = useState('');
  const [what, setWhat] = useState('Food');

  const [yelpData, setYelpData] = useState();

  function handleSearchWhat() {
    fetch('/api/events', {
      method: 'POST',
      body: JSON.stringify({ what, location }),
    })
      .then((response) => response.json())
      .then((data) => setYelpData(data));
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

  return (
    <VStack py={2} fontFamily="Nunito">
      <Head>
        <title>DateNight | Create a Date</title>
        <meta name="keywords" content="DateNight" />
      </Head>
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
            Where we're going:
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
            <Select>
              {yelpData.data.businesses.map((business) => (
                <option>{business.alias}</option>
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
          >
            <option value="Yes">Yes</option>
            <option value="No">No Shot</option>
          </Select>
        </FormControl>

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
        ></Textarea>

        <Link href="/Previous Dates">
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
          >
            Create Your Date!
          </Button>
        </Link>
      </div>
    </VStack>
  );
};

export default FormDate;
