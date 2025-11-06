import authRoutes from '@app/pages/auth/Routes';
import dashboardRoutes from '@app/pages/dashboard/Routes';
import productRoutes from '@app/pages/product/Routes';
import Layout from '@app/components/Layout';
import {Link } from 'react-router-dom';

export const AllPages = () => {


    const all_routes = [
        ...authRoutes,
        {
            element: <Layout />,
            children: [
                ...dashboardRoutes,
                ...productRoutes,
            ],
        },
        {
            path: '*',
            element: <BackTOPage/>,
        },
    ];

    return all_routes;
}

const BackTOPage = () => {

    return (
        <div>
            <h1> No page found </h1>
            Back to page
            <button><Link to="/dashboard">Go Home</Link></button>
        </div>
    )
}

export default BackTOPage;