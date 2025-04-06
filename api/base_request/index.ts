export const baseUrl: string = "https://affixcode-backend.vercel.app";
// "http://localhost:3121";
// https://affixcode-backend.vercel.app
//! This function is used to make a GET request to the server
export const baseGetRequest = async (path: string = "") => {
  const response = await fetch(`${baseUrl}/${path}`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
  return data;
};

//! This function is used to make a POST request to the server
export const basePostRequest = async (data: any, path: string = "") => {
  const response = await fetch(`${baseUrl}/${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const responseData = await response.json();
  if (!response.ok) {
    throw new Error(responseData.message || "Something went wrong!");
  }
  return responseData;
};
