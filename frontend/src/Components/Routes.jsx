import './App.jsx'
import Dashboard from './Dashboard.jsx';
import Login from './Login.jsx'
import Register from './Register.jsx'
import ErrorPage from './ErrorPage.jsx';
import Posts from './Posts.jsx';
import CreatePost from './CreatePost.jsx';
import MyPosts from './MyPosts.jsx';

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
    },
    {
        path: '/posts',
        element: <Posts />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/create-post',
        element: <CreatePost />,
        errorElement: <ErrorPage />,
    }, 
    {
        path: '/my-posts',
        element: <MyPosts />,
        errorElement: <ErrorPage />
    }
];

export default routes;