import { useEffect, useRef, useState, useReducer } from "react";
import authHeader from "../store/services/auth-header";

const useFetch = (url) => {
  const cache = useRef({});

  const initialState = {
    status: "idle",
    error: null,
    data: [],
  };

  const option = {
    method: "GET",
    headers: authHeader(),
  };

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "FETCHING":
        return {
          ...initialState,
          status: "fetching",
        };
      case "FETCHED":
        return {
          ...initialState,
          status: "fetched",
          data: action.payload,
        };
      case "FETCH_ERROR":
        return {
          ...initialState,
          status: "error",
          error: action.payload,
        };
      default:
        return state;
    }
  }, initialState);
  const [cancelRequest, setCancelRequest] = useState("");

  const fetchData = async (url) => {
    dispatch({
      type: "FETCHING",
    });

    try {
      const response = await fetch(url, option);
      const data = await response.json();
      cache.current[url] = data;
      if (cancelRequest) return;
      dispatch({
        type: "FETCHED",
        payload: data,
      });
    } catch (error) {
      if (cancelRequest) return;
      dispatch({
        type: "FETCH_ERROR",
        payload: error.message,
      });
    }
  };

  useEffect(() => {
    setCancelRequest(false);
    if (!url) return;

    fetchData(url);

    return function cleanup() {
      setCancelRequest(true);
    };
    // eslint-disable-next-line
  }, [url]);

  return [state, fetchData];
};

export default useFetch;
