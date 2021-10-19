import Link from 'next/link';
import styles from '../styles/Form.module.css';
import {
  FormControl,
  FormLabel,
  Text,
  Input,
  VStack,
  Heading,
} from '@chakra-ui/react';

const FormDate = () => {
  return (
    <VStack>
      <div className="form">
        <Heading alignSelf="center"> Create Your Date! </Heading>
        <FormControl colSpan={2}>
          <Text>Who are you going with:</Text>
          <Input
            type="text"
            autoComplete="name"
            required
            placeholder="Name of person invited"
          />

          <Text>Contact Number:</Text>
          <Input type="text" required placeholder="Name of person invited" />

          <Text>What are we doing?</Text>
          <Input type="text" required placeholder="What we're doing" />

          <Text>Where we going?</Text>
          <Input type="text" required placeholder="Location" />

          <label>When:</label>
          <p className="form-field">
            <input
              id="dateWhen"
              type="text"
              required
              placeholder="When is this?"
            />
          </p>

          <label>Go again?:</label>
          <select
            id="repeat"
            type="boolean"
            required
            placeholder="Do this date again?"
          >
            <option value="Yes">Yes</option>
            <option value="No">No Shot</option>
          </select>
        </FormControl>

        <label>Notes:</label>
        <textarea
          className="form-field-textarea"
          id="note"
          type="text"
          placeholder="Noteable things that happened during the date"
        ></textarea>

        <Link href="/Previous Dates">
          <button className={styles.btn}>
            <h3>Create Your Date!</h3>
          </button>
        </Link>
      </div>
    </VStack>
  );
};

export default FormDate;
