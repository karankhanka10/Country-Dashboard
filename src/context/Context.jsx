import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = createContext();

const url = "https://restcountries.com/v3.1/name/";

const AppProvider = ({ children }) => {
  const [data, setData] = useState([]); // State to store fetched data
  const [param, setParam] = useState("india");

  const fetchData = async (param) => {
    try {
      const response = await axios.get(url + param);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(param);
  }, []); // Empty dependency array means this effect runs once on mount

  return <AppContext.Provider value={{ data }}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
