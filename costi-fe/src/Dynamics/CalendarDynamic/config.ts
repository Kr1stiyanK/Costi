import {dateFnsLocalizer} from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import {GET} from "../../api";

export type event = {
    title: string,
    start: Date,
    end: Date,
    allDay?: boolean
}

export const locales = {
    "BG": require("date-fns/esm/locale/bg"),
};

export const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

// Will come from backend
// export const eventsApiCall = GET("/user-events");

// TODO: Should be removed. Here for testing purposes
export const events: event[] = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2023, 4, 10),
        end: new Date(2023, 4, 11),
    },
    {
        title: "Vacation",
        start: new Date(2023, 6, 7),
        end: new Date(2023, 6, 10),
    },
    {
        title: "Conference",
        start: new Date(2023, 6, 20),
        end: new Date(2023, 6, 23),
    },
];