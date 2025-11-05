import React from 'react';
import LogIn from './LogIn';
import SignUp from './SignUp';

const authRoutes = [
    {
        path: 'login',
        element : <LogIn/>,
    },
    {
        path: 'signup',
        element : <SignUp/>,
    },
];

export default authRoutes;
