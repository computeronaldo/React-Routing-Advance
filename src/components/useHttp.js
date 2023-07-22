import { useEffect, useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [events, setEvents] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchEventsData() {
      setIsLoading(true);

      const response = await fetch("http://localhost:8080/events");

      if (!response.ok) {
        setError("Fetching events failed!");
      } else {
        const resData = await response.json();
        setEvents(resData.events);
      }

      setIsLoading(false);
    }

    fetchEventsData();
  }, []);

  return { isLoading, error, events };
};

export default useHttp;
