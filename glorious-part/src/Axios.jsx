import React from "react";
import axios from "axios";

const Api = axios.create({
  baseURL: "https://be-fit.onrender.com",
});

export default Api;
