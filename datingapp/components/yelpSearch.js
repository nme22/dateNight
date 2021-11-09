import { Textarea, List, FormLabel } from '@chakra-ui/react';

import { useEffect, useState } from 'react';

export function Yelpfetch() {
  /// Set yelpData to equal the response from the Yelp Fetchcall
  const [yelpData, setYelpData] = useState('');
  useEffect(() => {
    fetch(
      `https://api.yelp.com/v3/businesses/search?term=${what}&location=${location}`
    )
      .then((response) => response.json())
      // 4. Setting *yelpData* to the url that we received from the response from
      .then((data) => setYelpData(data.yelpData));
    console.log(data);
  }, []);

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  return (
    <div>
      <FormLabel color="palevioletred" fontWeight="bold" p={3}>
        Potential date ideas:
      </FormLabel>
      <Textarea
        onChange={handleInputChange}
        placeholder="Potential ideas will show up here"
        size="md"
      >
        <List></List>
      </Textarea>
    </div>
  );
}
