import React from 'react';

export default async function yelpData() {
  await fetch(URL, {
    method: 'GET',
    mode: 'cors',
    headers: {
      Authorization: `Bearer ${process.env.YELP_API_TOKEN}`,
      content: `application/json`,
    },
  });
}
