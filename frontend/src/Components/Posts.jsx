import { useEffect, useState } from "react";
import { getPosts } from "../../api/api.jsx";
import {Link} from 'react-router-dom'
import '../Styles/posts.css'

function Posts() {
    const [posts, setPosts] = useState([]); // State to store posts

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postsData = await getPosts(); // Fetch posts
                setPosts(postsData); // Update state with fetched posts
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

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
        <div className="postsContainer">
            {posts.length > 0 ? (
                posts.map((post) => (
                    <div key={post.id} className="postCard">
                        <p>@{post.user.username}</p>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                        <div className="postInfo">
                            <img src="../images/comment-text-multiple.svg" alt="Comments" />
                            <p>{new Date(post.timestamp).toLocaleDateString('en-US', 
                                { year: '2-digit', month: '2-digit', day: '2-digit' })}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p>No posts yet.</p>
            )}
        </div>
        </>
    );
}

export default Posts;
