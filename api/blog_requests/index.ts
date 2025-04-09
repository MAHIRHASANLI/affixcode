import { baseGetRequest } from "../base_request";

export const getAllBlogRequests = async () => {
  return baseGetRequest("admin/blog");
};

export const getByIdBlogRequest = async (id: string) => {
  return baseGetRequest(`admin/blog/${id}`);
};
