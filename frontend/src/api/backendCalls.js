import axios from "axios";

export async function getAllCrops() {
  try {
    const response = await axios.get('http://localhost:80/api/v1/crops/', {
      headers: {
        "Content-Type": "application/json"
      }
    });
    return response.data; // Return the data part of the response
  } catch (error) {
    console.error("Error fetching the crops from the backend:", error);
    throw error; // Re-throw the error to handle it in the component
  }
}
