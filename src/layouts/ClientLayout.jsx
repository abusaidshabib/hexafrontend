import React from 'react';
import { Outlet } from 'react-router';

const ClientLayout = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default ClientLayout;