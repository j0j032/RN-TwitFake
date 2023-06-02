import { API_URL } from "./config";

export const login = async (data: { email: string }) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (res.status !== 200) {
    throw new Error("Failed to login");
  }
};

export const authenticate = async (data: { email: string; emailToken: string }) => {
  const res = await fetch(`${API_URL}/auth/authenticate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (res.status !== 200) {
    throw new Error("Failed to login");
  }
  return res.json();
};
