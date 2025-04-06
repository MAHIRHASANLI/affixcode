import { redirect } from "next/navigation";

export function loginUser(token: string) {
  localStorage.setItem("token", token);
  redirect("/dashboard");
}
function logoutUser() {
  localStorage.removeItem("token");
  redirect("/login");
}

export function isTokenExpired() {
  const token = localStorage.getItem("token");
  if (!token) {
    logoutUser();
    return;
  }

  const payload = JSON.parse(atob(token.split(".")[1]));
  const currentTime = Math.floor(Date.now() / 1000);

  if (payload.exp < currentTime) {
    logoutUser();
    return;
  }
}
