import { baseGetRequest } from "../base_request";

export const getAllProjectRequests = async () => {
  return baseGetRequest("admin/project");
};
