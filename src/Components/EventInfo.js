import { Typography } from "@mui/material";
// import { IEventInfo } from "./EventCalendar";

const EventInfo = ({ event }) => {
  return (
    <>
      <Typography>{event.description}</Typography>
    </>
  );
};

export default EventInfo;
