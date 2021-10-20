import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import Link from 'next/link';
import styles from '../styles/Form.module.css';
import {
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Textarea,
} from '@chakra-ui/react';

const FormDate = () => {
  return (
    <VStack>
      <div className="form">
        <Heading alignSelf="center"> Create Your Date! </Heading>
        <FormControl colSpan={2}>
          <FormLabel>Who are you going with:</FormLabel>
          <Input
            type="text"
            autoComplete="name"
            required
            placeholder="Name of person invited"
          />

          <FormLabel>Contact Number:</FormLabel>
          <Input type="text" required placeholder="Name of person invited" />

          <FormLabel>What we're doing:</FormLabel>
          <Input type="text" required placeholder="What we're doing" />

          <FormLabel>Where we're going:</FormLabel>
          <Input type="text" required placeholder="Location" />

          <FormLabel>When we're doing this:</FormLabel>
          <Input type="datetime-local" />
          {/* <DatePicker
            selected={''}
            type="datetime-local"
            onChange={(date) => setStartDate(date)}
          /> */}

          <FormLabel>Would you go on this date again?</FormLabel>
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

        <FormLabel>Notes:</FormLabel>
        <Textarea
          type="text"
          placeholder="Noteable things that happened during the date"
        ></Textarea>

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
