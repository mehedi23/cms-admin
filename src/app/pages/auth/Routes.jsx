import React from 'react';
import LogIn from './LogIn';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';
import EmailVerification from './EmailVerification';

const authRoutes = [
    {
        path: 'signin',
        element : <LogIn/>,
    },
    {
        path: 'signup',
        element : <SignUp/>,
    },
    {
        path: 'forgot-password',
        element: <ForgotPassword />,
    },
    {
        path: 'verify-email',
        element: <EmailVerification />,
    }
];

export default authRoutes;
