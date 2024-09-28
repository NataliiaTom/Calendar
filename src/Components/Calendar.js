import React, { Component } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import { useState, MouseEvent } from "react";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
} from "@mui/material";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";

import AddEventModal from "./AddEvent";
import EventInfoModal from "./EventModal";
import EventInfo from "./EventInfo";

const localizer = momentLocalizer(moment);

const initialEventFormState = {
  description: "",
  notes: "",
  day: "",
  time: "",
  todoId: undefined,
};

export const generateId = () =>
  (Math.floor(Math.random() * 10000) + 1).toString();

const DnDCalendar = withDragAndDrop(Calendar);

const MyCalendar = () => {
  const [openSlot, setOpenSlot] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [eventInfoModal, setEventInfoModal] = useState(false);

  const [eventFormData, setEventFormData] = useState(initialEventFormState);

  const [events, setEvents] = useState([]);
  const [todos, setTodos] = useState([]);

  const [edit, setEdit] = useState(false);

  const handleSelectSlot = (event) => {
    setOpenSlot(true);
    setCurrentEvent(event);
  };

  const handleSelectEvent = (event) => {
    setCurrentEvent(event);
    setEventInfoModal(true);
  };

  const handleClose = () => {
    console.log("handleClose");
    setEventFormData(initialEventFormState);
    setOpenSlot(false);
  };

  const onAddEvent = (e) => {
    e.preventDefault();

    console.log("e:", e.target);

    console.log("currentEvent:", currentEvent);
    console.log("eventFormData:", eventFormData);

    const dateString = eventFormData.day + "T" + eventFormData.time;

    const data = {
      ...eventFormData,
      _id: generateId(),
      start: new Date(Date.parse(dateString)),
      end: new Date(Date.parse(dateString)),
      time: eventFormData.time,
      color: "#e28743",
    };

    const newEvents = [...events, data];

    setEvents(newEvents);
    handleClose();
  };

  const onDeleteEvent = () => {
    setEvents(() => [...events].filter((e) => e._id !== currentEvent._id));
    setEventInfoModal(false);
  };

  const onEditEvent = (e) => {
    console.log(edit);
    console.log(e.target.value);
    const updatedCurrentEvent = {
      ...currentEvent,
      description: e.target.value,
    };
    setCurrentEvent(updatedCurrentEvent);
    setEvents(
      events.map((x) => {
        if (x._id == currentEvent._id) {
          return updatedCurrentEvent;
        } else {
          return x;
        }
      })
    );
  };

  const onEditDescription = (e) => {
    if (!edit) return;
    console.log(edit);
    console.log(e.target.value);
    const updatedCurrentDescription = {
      ...currentEvent,
      description: e.target.value,
    };
    setCurrentEvent(updatedCurrentDescription);
  };

  const onEditDay = (e) => {
    if (!edit) return;

    const newDate = moment(new Date(e.target.value)).format("YYYY-MM-DD");

    const dateString = newDate + "T" + currentEvent.time;

    const updatedCurrentEvent = {
      ...currentEvent,
      day: newDate,
      start: new Date(Date.parse(dateString)),
      end: new Date(Date.parse(dateString)),
    };

    setCurrentEvent(updatedCurrentEvent);
  };

  const onEditTime = (e) => {
    if (!edit) return;

    const dateString = currentEvent.day + "T" + e.target.value;

    const updatedCurrentEvent = {
      ...currentEvent,
      time: e.target.value,
      start: new Date(Date.parse(dateString)),
      end: new Date(Date.parse(dateString)),
    };
    setCurrentEvent(updatedCurrentEvent);
  };

  const onEditNote = (e) => {
    if (!edit) return;

    const updatedCurrentEvent = {
      ...currentEvent,
      notes: e.target.value,
    };
    setCurrentEvent(updatedCurrentEvent);
  };

  const onSaveEvent = () => {
    setEvents(
      events.map((x) => {
        if (x._id == currentEvent._id) {
          return currentEvent;
        } else {
          return x;
        }
      })
    );
    console.log(events);
    setEventInfoModal(false);
    setEdit(false);
  };

  const allowEdit = () => {
    setEdit(!edit);
  };

  const setColor = (e) => {
    if (!edit) return;

    const updatedCurrentEvent = {
      ...currentEvent,
      color: e.target.value,
    };
    setCurrentEvent(updatedCurrentEvent);
  };

  const onEventDrop = ({ event, start, end }) => {
    const duration = event.end - event.start;
    const updatedEvents = events.map((ev) => {
      if (ev._id === event._id) {
        return { ...ev, start, end: new Date(start.getTime() + duration) };
      }
      return ev;
    });
    setEvents(updatedEvents);
  };

  const onEventResize = ({ event, start, end }) => {
    const updatedEvents = events.map((ev) => {
      if (ev._id === event._id) {
        return { ...ev, start, end };
      }
      return ev;
    });
    setEvents(updatedEvents);
  };

  return (
    <>
      <span style={{ height: "1vh", fontWeight: "normal" }}>
        <p>Calendar view</p>
      </span>
      <div className="App">
        <AddEventModal
          open={openSlot}
          handleClose={handleClose}
          eventFormData={eventFormData}
          setEventFormData={setEventFormData}
          onAddEvent={onAddEvent}
          todos={todos}
        />
        <EventInfoModal
          open={eventInfoModal}
          handleClose={() => setEventInfoModal(false)}
          onDeleteEvent={onDeleteEvent}
          currentEvent={currentEvent}
          onEditDescription={onEditDescription}
          onEditNote={onEditNote}
          allowEdit={allowEdit}
          onEditDay={onEditDay}
          onEditTime={onEditTime}
          allow={edit}
          onCancelEvent={() => {
            setEventInfoModal(false);
            setEdit(false);
          }}
          onSaveEvent={onSaveEvent}
          setColor={setColor}
        />
        <DnDCalendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={events}
          style={{ height: "80vh" }}
          onSelectEvent={handleSelectEvent}
          onSelectSlot={handleSelectSlot}
          selectable
          resizable
          components={{ event: EventInfo }}
          onEventDrop={onEventDrop}
          onEventResize={onEventResize}
          step={60}
          timeslots={1}
          eventPropGetter={(event) => ({
            style: {
              backgroundColor: event.color ? event.color : "#66a0fe",
              borderColor: event.color ? event.color : "#66a0fe",
              height: 27,
            },
          })}
        />
      </div>
    </>
  );
};

export default MyCalendar;
