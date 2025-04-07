import { redirect } from "next/navigation";

export function loginUser(token: string) {
  localStorage.setItem("token", token);
  redirect("/dashboard");
}
function logoutUser() {
  localStorage.removeItem("token");
  redirect("/login");
}

export function isAuth(cookies: any) {
  const token = cookies.get("accessToken")?.value;

  if (!token) return false;

  try {
    const payloadBase64 = token.split(".")[1];
    const decodedPayload = JSON.parse(atob(payloadBase64));

    const currentTime = Math.floor(Date.now() / 1000);

    // Token vaxtı keçibsə
    if (decodedPayload.exp < currentTime) {
      return false;
    }

    return true;
  } catch (err) {
    return false;
  }
}
