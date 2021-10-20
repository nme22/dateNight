import Link from 'next/link';
import styles from '../styles/Form.module.css';
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
      <Heading size="2xl"> Create Your Date! </Heading>
      <Divider />
      <div>
        <FormControl>
          <FormLabel>Who are you going with:</FormLabel>
          <Input
            focusBorderColor="Pink"
            type="text"
            autoComplete="name"
            required
            placeholder="Name of person invited"
          />

          <FormLabel>Contact Number:</FormLabel>
          <Input
            focusBorderColor="Pink"
            type="text"
            required
            placeholder="Name of person invited"
          />

          <FormLabel>What we're doing:</FormLabel>
          <Input
            focusBorderColor="Pink"
            type="text"
            required
            placeholder="What we're doing"
          />

          <FormLabel>Where we're going:</FormLabel>
          <Input
            focusBorderColor="Pink"
            type="text"
            required
            placeholder="Location"
          />

          <FormLabel>When we're doing this:</FormLabel>
          <Input focusBorderColor="Pink" type="datetime-local" />

          <FormLabel>Would you go on this date again?</FormLabel>
          <Select
            focusBorderColor="Pink"
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
          focusBorderColor="Pink"
          type="text"
          placeholder="Noteable things that happened during the date"
        ></Textarea>

        <Link href="/Previous Dates">
          <Button
            display="flex"
            w={150}
            p={2}
            m={2}
            bg="palevioletred"
            color="white"
            textAlign="right"
            borderRadius={4}
          >
            Create Your Date!
          </Button>
        </Link>
      </div>
    </VStack>
  );
};

export default FormDate;
