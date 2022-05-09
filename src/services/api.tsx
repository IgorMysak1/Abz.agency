import axios from "axios";
import { FieldsProperties } from "../constants/fieldsProperties";
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
export const setUser = async (aboutUser: FieldsProperties) => {
  try {
    const getToken = await axios.get(
      "https://frontend-test-assignment-api.abz.agency/api/v1/token"
    );
    const getPosition = await axios.get(
      "https://frontend-test-assignment-api.abz.agency/api/v1/positions"
    );
    const { id } = getPosition.data.positions.find(
      ({ name }: { name: string }) => name === aboutUser.job
    );
    const formData = new FormData();
    formData.append("name", aboutUser.name);
    formData.append("email", aboutUser.email);
    formData.append("phone", aboutUser.phone);
    formData.append("position_id", id);
    formData.append("photo", aboutUser.file);
    const signUpUser = await fetch(
      `https://frontend-test-assignment-api.abz.agency/api/v1/users`,
      {
        method: "POST",
        body: formData,
        headers: { Token: getToken.data.token },
      }
    );

    return signUpUser;
  } catch (error) {
    alert(`Error: ${error}`);
  }
};
