'use client'


import * as React from 'react';
import { AppProvider } from '@toolpad/core/AppProvider';
import { Account } from '@toolpad/core/Account';

const demoSession = {
  user: {
    name: 'Helia Rezaie',
    email: 'Heliarezaie@gmail.com',
    image: '/2.jpg',
  },
};

export default function AccountDemoSignedIn() {
  const [session, setSession] = React.useState(demoSession);
  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setSession(demoSession);
      },
      signOut: () => {
        setSession(null);
      },
    };
  }, []);

  return (
    <AppProvider authentication={authentication} session={session}>
      {/* preview-start */}
      <Account />
      {/* preview-end */}
    </AppProvider>
  );
}
