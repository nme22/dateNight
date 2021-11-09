import {
  Textarea,
  FormControl,
  Select,
  FormLabel,
  Button,
  Text,
} from '@chakra-ui/react';
export default function PostYelpData() {
  /// Set Data to equal the response from the Yelp Fetchcall
  let yelpData = await fetch(
    `https://api.yelp.com/v3/businesses/search?term=${what}&location=${location}`
  );
  const [location, setLocation] = useState('');
  const [what, setWhat] = useState('');

  function handleLocationChange(e) {
    setLocation(e.target.value);
  }
  function handleWhatChange(e) {
    setWhat(e.target.value);
  }

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };
  return (
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
      <FormLabel color="palevioletred" fontWeight="bold">
        Potential date ideas:
      </FormLabel>
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
        onClick={yelpData}
      >
        See whats around!
      </Button>

      <Text mb="8px">Value: {value}</Text>
      <Textarea
        value={value}
        onChange={handleInputChange}
        placeholder="Here is a sample placeholder"
        size="sm"
      />
    </FormControl>
  );
}
