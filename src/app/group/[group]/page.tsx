import React from 'react';
import Group from './Group';

interface pageProps {
    params: Promise<{group: string}>
}

const Page : React.FC<pageProps> = async ({params}) => {

    return (
        <div className='main'>
            <Group 
                group={(await params).group}
            />
        </div>
    );
}

export default Page;
