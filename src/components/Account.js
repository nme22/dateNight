import { useState, useEffect } from 'react';
import { supabase } from '@utils/supabaseClient';
import { Container, Button, FormLabel } from '@chakra-ui/react';

export default function Account({ session }) {
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      getProfile();
   }, [session]);

   async function getProfile() {
      try {
         setLoading(true);
         const user = supabase.auth.user();
      } catch (error) {
         alert(error.message);
      } finally {
         setLoading(false);
      }
   }
   async function signOut() {
      const { error } = await supabase.auth.signOut();
   }

   return (
      <Container as="div">
         <FormLabel htmlFor="email" color="palevioletred">
            Welcome back {session.user.email}!
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
            onClick={signOut}
            _hover={{
               bg: 'turquoise',
            }}
         >
            {loading ? 'Signing out ...' : 'Sign Out'}
         </Button>
      </Container>
   );
}
