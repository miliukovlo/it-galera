import React from 'react';
import UsersList from '@/Components/Users/UsersList/UsersList';
import { getGroup, getRole } from '@/authLib';

const Users : React.FC = async () => {
	const role = await getRole()
	const groups = await getGroup()

    return (
        <main className='main'>
            <UsersList
                role={role!}
                group={groups!}
            />
        </main>
    );
}

export default Users;
