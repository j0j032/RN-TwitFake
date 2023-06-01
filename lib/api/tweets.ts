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

export const createTweet = async (tweet: { content: string; image: string; userId: string }) => {
  const res = await fetch(`${API_URL}/tweet`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    body: JSON.stringify(tweet),
  });
  if (res.status === 401) {
    throw new Error("Not authorized. Please sign in");
  }
  if (res.status !== 200) {
    console.log(res);
    throw new Error("Error creating tweet");
  }

  return await res.json();
};
