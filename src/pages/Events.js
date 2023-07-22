import { useLoaderData, json } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();

  // if(data.isError) {
  //   return <p>{data.message}</p>
  // }

  const events = data.events;
  return <EventsList events={events} />;
}

export default EventsPage;

// loader function not being functional react components can't
// use react hooks like useState, useEffect etc. apart from that
// as we can run them on browser all browser APIs can be used.
export async function loader() {
  // fetch always returns a promise and returns a response object
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // ... handle errors
    //return {isError: true, message: "Could not fetch data."};
    // throw new Response(JSON.stringify({message: 'Could not fetch events.'}), {
    //   status: 500
    // });
    throw json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    // the response object returned can directly be accessed by useLoaderData
    // to get the data and we can avoid [await response.json()]. This is some
    // functionality the router and modern browser provides.
    // const resData = await response.json();
    // return resData.events;
    return response;
  }
}
