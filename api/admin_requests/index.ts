import { basePostRequest } from "../base_request";

interface LoginRequestData {
  username: string;
  password: string;
  isAdmin: boolean;
}

export const loginRequest = async (user: LoginRequestData) => {
  return basePostRequest(user, "admin/signin");
};
