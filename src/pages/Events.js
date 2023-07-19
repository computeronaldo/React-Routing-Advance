import React from "react";
import EventsList from "../components/EventsList";

const DUMMY_EVENTS = [
  {
    id: "d1",
    image: "",
    title: "Go to park.",
    date: "17:00 PM",
  },
  {
    id: "f2",
    image: "",
    title: "Attend hacktoberfest",
    date: "18:30 PM",
  },
  {
    id: "s2",
    image: "",
    title: "Watch LaLiga match in Madrid",
    date: "13:00 PM",
  },
];

const EventsPage = () => {
  return (
    <>
      <h1>Events Page</h1>
      <EventsList events={DUMMY_EVENTS} />
    </>
  );
};

export default EventsPage;
