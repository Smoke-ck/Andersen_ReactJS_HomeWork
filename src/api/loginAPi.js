const API_URL = 'https://fakestoreapi.com/auth/login';
export const loginUser = async (user) => {
  const config = {
    method: "POST",
    body: JSON.stringify({
      username: user.name,
      password: user.password
    }),
    headers: {
      "Content-Type": "application/json"
    }
  };

  const response = await fetch(`${API_URL}`, config);
  const result = await response.json();

  return result;
}