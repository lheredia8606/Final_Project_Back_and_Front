import { Temporal } from "@js-temporal/polyfill";

export const getTodaysDate = (): Temporal.PlainDate => {
  return Temporal.Now.plainDateISO();
};

export const getFormattedDate = (date: Temporal.PlainDate): string => {
  return date.toLocaleString("en-US", { dateStyle: "long" });
};

export const getDateFromString = (date: string): Temporal.PlainDate => {
  const plainDateStr = date.split("T")[0];
  return Temporal.PlainDate.from(plainDateStr);
};

export const getStringFromPlainDate = (
  plainDate: Temporal.PlainDate
): string => {
  return plainDate.toString();
};

export const getDaysUntilDeathLine = (deadLine: Temporal.PlainDate): number => {
  const today = Temporal.Now.plainDateISO();
  return deadLine.since(today).days;
};

export const getOrderDeadLine = (days: number) => {
  const today = Temporal.Now.plainDateISO();
  return today.add({ days }).toString();
};

/**
 *
 * @param iat issue at
 * @returns true if the day in the Date correspond to today's date, otherwise false
 */
export const isTokenValidToday = (iat: number): boolean => {
  const issuedDate = Temporal.Instant.fromEpochSeconds(iat)
    .toZonedDateTimeISO("UTC")
    .toPlainDate();
  const today = Temporal.Now.plainDateISO("UTC");
  return Temporal.PlainDate.compare(issuedDate, today) === 0;
};
