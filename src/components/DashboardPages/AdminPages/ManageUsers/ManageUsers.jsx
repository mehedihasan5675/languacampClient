import React from 'react';
import DashSecTitle from '../../../utils/DashSecTitle';
import UsersTable from './UsersTable';

const ManageUsers = () => {
    return (
        <div className='mx-auto lg:w-10/12 w-11/12 mt-10 '>
           <DashSecTitle body="Manage users">
           </DashSecTitle>
           <UsersTable></UsersTable>
        </div>
    );
};

export default ManageUsers;