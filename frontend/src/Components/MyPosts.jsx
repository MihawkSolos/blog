import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUserPosts } from '../../api/api.jsx'
import '../Styles/myposts.css';

function MyPosts () {
    const [myPosts, setMyPosts] = useState([]);

    useEffect (() => {
        const fetchPosts = async () => {
            try {
                const postsData = await getUserPosts(); // Fetch posts
                setMyPosts(postsData);
            } catch (error) {
                console.error("Error fetching user posts:", error);
            }
        }

        fetchPosts();
    }, []);


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

        <div className="myPostsContainer">
            {myPosts.length > 0 ? (
                myPosts.map((post) => (
                    <div key={post.id} className="postCard">
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                        <div className="postInfo">
                            <p>{new Date(post.timestamp).toLocaleDateString('en-US', 
                                { year: '2-digit', month: '2-digit', day: '2-digit' })}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p>You do not have any posts yet.</p>
            )}
        </div>
        </>
    );
}

export default MyPosts;