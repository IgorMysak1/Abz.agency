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
export const getJobs = async () => {
  try {
    const response = await axios.get(
      `https://frontend-test-assignment-api.abz.agency/api/v1/positions`
    );
    return response.data.positions;
  } catch (error) {
    alert(`Error: ${error}`);
  }
};
