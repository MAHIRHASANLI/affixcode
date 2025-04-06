import { basePostRequest } from "../base_request";

//! This function is used to make a POST request to the server
export const ContactMessagePostRequest = async (data: any) => {
  return basePostRequest(data, "contact/message");
};
