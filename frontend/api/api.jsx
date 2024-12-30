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
