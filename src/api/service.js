import { apiService } from "./api";

// GET hello
export const getHello = () => {
  const token = localStorage.getItem("token");

  return apiService.get("/hello", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// GET logout
export const logout = () => apiService.get("/auth/logout");