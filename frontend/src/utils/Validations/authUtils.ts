import { jwtDecode } from "jwt-decode";
import { tokenSchema } from "../ApplicationTypesAndGlobals";
import { isTokenValidToday } from "../TemporalDate";

export const getUserFromJwt = (token: string) => {
  const result = tokenSchema.safeParse(jwtDecode(token));
  if (result.success && isTokenValidToday(result.data.iat)) {
    return result.data;
  }
  return null;
};
