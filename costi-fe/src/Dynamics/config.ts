import { dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import { GET } from "../api";

export const locales = {
  BG: require("date-fns/esm/locale/bg"),
};

export const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export const eventsApiCall = () => GET("/application/get-events");

export const clearEventList = () => {
  GET("/application/delete-all")
    .then()
    .catch((e) => {
      console.log("Error: " + e);
    });
};
