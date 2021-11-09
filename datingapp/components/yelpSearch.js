import { Textarea, List } from '@chakra-ui/react';
import React from 'react';

import { useEffect, useState } from 'react';

export default function Yelpfetch() {
  /// Set yelpData to equal the response from the Yelp Fetchcall
  const [yelpData, setYelpData] = useState(null);
  useEffect(() => {
    fetch(
      `https://api.yelp.com/v3/businesses/search?term=${what}&location=${location}`
    ).then((response) => response.json());
    // 4. Setting *yelpData* to the image url that we received from the response above
    console.log(response);
    //   .then((data) => setYelpData(data.message));
  }, []);

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  return (
    <div>
      <Textarea
        onChange={handleInputChange}
        placeholder="Potential ideas will show up here"
        size="sm"
      >
        <List>Dates</List>
      </Textarea>
    </div>
  );
}
