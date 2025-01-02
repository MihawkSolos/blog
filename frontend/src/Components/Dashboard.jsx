import {Link} from 'react-router-dom'
import '../Styles/dashboard.css'

function Dashboard() {

    return (
        <>
            <div className="header">
                <Link to='/posts'>
                    Posts
                </Link>
                <Link to='/create-post'>
                    Create Post
                </Link>
                <Link to='/my-posts'>
                    My Posts
                </Link>
            </div>

            <div className="welcome">
                <p>
                This is your space to share ideas, tell stories, and connect with a community of like-minded individuals. Whether you&apos;re here to write, read, or explore, there&apos;s something for everyone.
                Got a thought, idea, or story?
                <br />
                <br /> Hit the &apos;Create Post&apos; button and let your voice be heard.
                </p>
            </div>

        </>
    )
}

export default Dashboard;