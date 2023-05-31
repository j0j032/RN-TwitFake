import { API_URL, authToken } from "./config";

export const getTweets = async () => {
  if (!authToken) {
    return;
  }

  const res = await fetch(`${API_URL}/tweet`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  if (res.status === 401) {
    //removeAuthToken();
    throw new Error("Not authorized. Please sign in");
  }
  if (res.status !== 200) {
    throw new Error("Error fetching tweets");
  }
  return await res.json();
};

export const getSingleTweet = async (id: string) => {
  if (!authToken) {
    return;
  }

  const res = await fetch(`${API_URL}/tweet/${id}`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  if (res.status === 401) {
    //removeAuthToken();
    throw new Error("Not authorized. Please sign in");
  }
  if (res.status !== 200) {
    throw new Error("Error fetching tweets");
  }
  return await res.json();
};
