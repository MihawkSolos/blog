import './App.jsx'
import Dashboard from './Dashboard.jsx';
import Login from './Login.jsx'
import Register from './Register.jsx'
import ErrorPage from './ErrorPage.jsx';

const routes = [
    {
        path: '/',
        element: <Login />,
        errorElement: <ErrorPage />,
    },
    {
        path:  '/register',
        element: <Register />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        errorElement: <ErrorPage />,
    }
];

export default routes;