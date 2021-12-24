/** @format */

import axios from "axios";

const backendUrl = () => {
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:4000";
  } else {
    return "https://lysobackend.herokuapp.com";
  }
};

export default axios.create({
  baseURL: backendUrl(),
  headers: {
    "Content-Type": "application/json",
  },
});
