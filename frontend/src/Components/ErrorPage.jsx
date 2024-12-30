import { Link } from 'react-router-dom';

const ErrorPage = () => {

    return (
        <>
            <h1>Uh oh! Error Ocurred</h1>
            <Link to='/'>
                Click here to go back to home page.
            </Link>
        </>
    )
}

export default ErrorPage;