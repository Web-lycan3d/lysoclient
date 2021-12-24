/** @format */

import { useEffect } from "react";
import toast from "react-hot-toast";

const InternetStaus = () => {
  useEffect(() => {
    if (!navigator.onLine) {
      toast.error("Refresh if connected");
      toast.error("Your offline  Please connect to internet");
    }
  }, []);
};

export default InternetStaus;
