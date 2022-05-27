import { VStack } from '@chakra-ui/react';
import { supabase } from '@utils/supabaseClient';
import Auth from '@components/Auth';
import Account from '@components/Account';
import { useState, useEffect } from 'react';

export default function Login() {
   const [session, setSession] = useState(null);
   useEffect(() => {
      setSession(supabase.auth.session());
      supabase.auth.onAuthStateChange((_event, session) => {
         setSession(session);
      });
   }, []);
   return (
      <>
         <div>
            {!session ? (
               <Auth />
            ) : (
               <Account key={session.user.id} session={session} />
            )}
         </div>
      </>
   );
}
