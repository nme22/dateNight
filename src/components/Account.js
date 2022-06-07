import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';
import { Container, Button, Input, Label } from '@chakra-ui/react';

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

   return (
      <Container>
         <Label htmlFor="email">Welcome back {session.user.email}</Label>

         <Input
            id="email"
            type="text"
            value={session.user.email}
            disabled
            bg="palevioletred"
         />

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
         >
            {loading ? 'Signing out ...' : 'Sign Out'}
         </Button>
      </Container>
   );
}
