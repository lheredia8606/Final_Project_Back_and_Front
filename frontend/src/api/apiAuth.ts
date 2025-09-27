import { baseUrl } from "../utils/ApplicationTypesAndGlobals";

export const authenticate = async (email: string, password: string) => {
  return await fetch(`${baseUrl}users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
};
