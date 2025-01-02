// api.jsx
import Axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;  // import.meta instead of process.etc

export const getData = async () => {
  try {
    const response = await Axios.get(`${API_URL}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const createPost = async ({ title, content }) => {
  try {
    const token = localStorage.getItem('token'); // Get the user's token from localStorage

    if (!token) {
      throw new Error("No token found");
    }

    // Send the POST request with the title, content, and token in the headers
    await Axios.post(
      `${API_URL}/posts`, 
      { title, content }, // Title and content are sent in the body of the request
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Token is sent in the Authorization header
        }
      }
    );

  } catch (error) {
    console.error("Error creating post: ", error);
    throw error;
  }
};


export const getPosts = async () => {
  try {
    const response = await Axios.get(`${API_URL}/posts`,{
      headers: {
        'Content-Type': 'application/json',
      }
    });

    return response.data;

  } catch (error) {
    console.log('Failed to connect to server.');
    throw error;
}
}

export const getUserPosts = async () => {
  try {
    const token = localStorage.getItem('token');

    const response = await Axios.get(`${API_URL}/my-posts`,{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    })
    return response.data;
  } catch (error) {
    console.log('Failed to get user posts');
    throw error;
  }
}

export const getPostComments = async () => {
  try {
    const token = localStorage.getItem('token');

    const response = await Axios.get(`${API_URL}/comments`,{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    })
    return response.data;
  } catch (error) {
    console.log('Failed to get user posts');
    throw error;
  }
}