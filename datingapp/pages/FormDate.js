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
} from '@chakra-ui/react';
import { useState } from 'react';

const FormDate = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [when, setWhen] = useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handlePhoneNumberChange(e) {
    setPhoneNumber(e.target.value);
  }
  function handleLocationChange(e) {
    setLocation(e.target.value);
  }
  function handleWhenChange(e) {
    setWhen(e.target.value);
  }

  return (
    <VStack py={2} fontFamily="Nunito">
      <Heading size="2xl" color="palevioletred">
        {' '}
        Create Your Date!{' '}
      </Heading>
      <Divider />
      <div>
        <FormControl>
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
            placeholder="Name of person invited"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            fontWeight="bold"
          />

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
          >
            <option value="Food">Food</option>
            <option value="Entertainment">Entertainment</option>
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
            m="20px"
            bg="palevioletred"
            borderradius="4px"
            color="white"
            text-align="center"
          >
            Create Your Date!
          </Button>
        </Link>
      </div>
    </VStack>
  );
};

export default FormDate;
