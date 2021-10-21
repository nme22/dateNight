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

const FormDate = () => {
  return (
    <VStack py={2}>
      <Heading size="2xl" color="">
        {' '}
        Create Your Date!{' '}
      </Heading>
      <Divider />
      <div>
        <FormControl>
          <FormLabel>Who are you going with:</FormLabel>
          <Input
            _focus={{
              borderColor: 'Pink',
            }}
            type="text"
            autoComplete="name"
            required
            placeholder="Name of person invited"
          />

          <FormLabel>Contact Number:</FormLabel>
          <Input
            _focus={{
              borderColor: 'Pink',
            }}
            type="text"
            required
            placeholder="Name of person invited"
          />

          <FormLabel>What we're doing:</FormLabel>
          <Input
            _focus={{
              borderColor: 'Pink',
            }}
            type="text"
            required
            placeholder="What we're doing"
          />

          <FormLabel>Where we're going:</FormLabel>
          <Input
            _focus={{
              borderColor: 'Pink',
            }}
            type="text"
            required
            placeholder="Location"
          />

          <FormLabel>When we're doing this:</FormLabel>
          <Input
            _focus={{
              borderColor: 'Pink',
            }}
            type="datetime-local"
          />

          <FormLabel>Would you go on this date again?</FormLabel>
          <Select
            _focus={{
              borderColor: 'Pink',
            }}
            type="boolean"
            required
            placeholder="Again?"
            textAlign="center"
          >
            <option value="Yes">Yes</option>
            <option value="No">No Shot</option>
          </Select>
        </FormControl>

        <FormLabel>Notes:</FormLabel>
        <Textarea
          _focus={{
            borderColor: 'Pink',
          }}
          type="text"
          placeholder="Noteable things that happened during the date"
        ></Textarea>

        <Link href="/Previous Dates">
          <Button
            d="block"
            width="150px"
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
