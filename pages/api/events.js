export default async function handler(req, res) {
   const { what, location } = JSON.parse(req.body);

   try {
      const response = await fetch(
         `https://api.yelp.com/v3/businesses/search?term=${what}&location=${location}`,
         {
            method: 'GET',
            headers: {
               Authorization: `Bearer ${process.env.YELP_API_TOKEN}`,
               'Content-Type': `application/json`,
            },
         }
      );
      const data = await response.json();
      res.send({ data });
   } catch (error) {
      console.log('its nav and im showing up');
      res.status(500).json({ error: 'failed to load' });
      res.status(500).send({ error: 'API does not support request' });
   }
}
