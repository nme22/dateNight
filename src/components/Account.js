import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';

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
      <div className="form-widget">
         <div>
            <label htmlFor="email">Email</label>

            <input id="email" type="text" value={session.user.email} disabled />
         </div>

         <div>
            <button
               className="button block"
               onClick={() => supabase.auth.signOut()}
            >
               Sign Out
            </button>
         </div>
      </div>
   );
}
