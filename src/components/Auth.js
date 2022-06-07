import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import { VStack, Button, Heading, Input } from '@chakra-ui/react';

export default function Auth() {
   const [loading, setLoading] = useState(false);
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   async function signUpWithEmail(email, password) {
      const { user, session, error } = await supabase.auth.signUp({
         email: email,
         password: password,
      });
   }

   async function signInWithEmail(email, password) {
      const { user, error } = await supabase.auth.signIn({
         email: email,
         password: password,
      });
   }

   async function signOut() {
      const { error } = await supabase.auth.signOut();
   }

   return (
      <VStack
         fontFamily="Nunito"
         justifyContent="space-around"
         fontWeight="bold"
      >
         <Heading size="lg">Login with your email and password</Heading>

         <Input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
         />
         <Input
            type="password"
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            onClick={(e) => {
               e.preventDefault();
               signInWithEmail(email, password);
            }}
            disabled={loading}
         >
            <span>{loading ? 'Loading' : 'Login'}</span>
         </Button>
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
            onClick={(e) => {
               e.preventDefault();
               signUpWithEmail(email, password);
            }}
            disabled={loading}
         >
            <span>{loading ? 'Loading' : 'Sign Up'}</span>
         </Button>
      </VStack>
   );
}
