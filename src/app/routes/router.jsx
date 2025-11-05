import authRoutes from '@app/pages/auth/Routes';
import dashboardRoutes from '@app/pages/dashboard/Routes';

export const AllPages = () => {


    const all_routes = [
        ...authRoutes,
        ...dashboardRoutes,
        {
            path: '*',
            element: 'No page found as',
        },
    ];

    return all_routes;
}