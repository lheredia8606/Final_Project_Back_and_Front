import { jwtDecode } from "jwt-decode";
import { userSchema } from "../ApplicationTypesAndGlobals";
import { isTokenValidToday } from "../TemporalDate";

export const getUserFromJwt = (token: string) => {
  const result = userSchema.safeParse(jwtDecode(token));
  if (result.success && isTokenValidToday(result.data.iat)) {
    return result.data;
  }
  return null;
};
