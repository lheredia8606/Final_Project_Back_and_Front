import { jwtDecode } from "jwt-decode";
import { userSchema } from "../ApplicationTypesAndGlobals";
import { isTokenValidToday } from "../TemporalDate";

export const getUserFromJwt = (token: string) => {
  const { success, data: user } = userSchema.safeParse(jwtDecode(token));
  if (success && isTokenValidToday(user.iat)) {
    return user;
  }
  return null;
};
