export const validateToken = async () => {
  try {
    const data = await fetch(
      "http://localhost:8002/api/v1/users/verify-access-token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    const res = await data.json();
    console.log(res);
  } catch (error) {
    setError("Invalid username or password");
    setLoading(false);
  }
};

export const ApiCall = async (method, url, body) => {
  try {
    const data = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      credentials: "include",
    });
    const res = await data.json();
    return res;
  } catch (error) {
    console.log(error);
    return { error: "Invalid username or password" };
  }
};