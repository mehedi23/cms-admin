import authRoutes from '@app/pages/auth/Routes';
import dashboardRoutes from '@app/pages/dashboard/Routes';
import Layout from '@app/components/Layout';

export const AllPages = () => {


    const all_routes = [
        ...authRoutes,
        {
            element: <Layout />,
            children: [
                ...dashboardRoutes,
                {
                    path: '*',
                    element: 'No page found as',
                },
            ],
        },
        {
            path: '*',
            element: 'No page found as',
        },
    ];

    return all_routes;
}