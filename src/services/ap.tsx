import axios from "axios";

export const getUsers = async (page: number, count: number) => {
  try {
    const response = await axios.get(
      `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=${count}`
    );
    return response.data;
  } catch (error) {
    alert(`Error: ${error}`);
  }
};
