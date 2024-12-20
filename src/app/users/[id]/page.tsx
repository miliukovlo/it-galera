import React from 'react';
import CurrentUser from './CurrentUser';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Список",
    description: "Generated by create next app",
  };

  interface pageProps {
    params: Promise<{id: string}>
  }

const Page: React.FC<pageProps> = async ({params}) => {
    return (
        <main className='main'>
            <CurrentUser
                id={(await params).id}
            />
        </main>
    );
}

export default Page;
