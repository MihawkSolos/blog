import { createPost } from "../../api/api.jsx";
import { useState } from "react";
import {Link} from 'react-router-dom'
import '../Styles/createpost.css'

function CreatePost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Call the API to create a post
            await createPost({ title, content });
            setSuccessMessage("Post created successfully!");
            setErrorMessage('');
            setTitle('');
            setContent('');
        } catch (error) {
            console.error("Error creating post:", error);
            setErrorMessage("Failed to create post. Please try again.");
            setSuccessMessage('');
        }
    };

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

        <div className="createPostContainer">
            <form onSubmit={handleSubmit}>
                <div className="titleInput">
                    <label htmlFor="title">Title:</label>
                    <input 
                        type="text" 
                        id="title" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        required 
                    />
                </div>
                
                <div className="contentInput">
                    <label htmlFor="content">Content:</label>
                    <textarea 
                        name="content" 
                        id="content" 
                        rows={10}
                        cols={25}
                        value={content} 
                        onChange={(e) => setContent(e.target.value)} 
                        required
                    />
                </div>

                <button type="submit">Submit</button>
            </form>

            {successMessage && <p className="successMessage">{successMessage}</p>}
            {errorMessage && <p className="errorMessage">{errorMessage}</p>}
        </div>
        </>
    );
}

export default CreatePost;
