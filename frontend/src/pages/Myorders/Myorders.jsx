import React, { useContext, useEffect, useState } from "react";
import "./Myorders.css";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";
const Myorders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setdata] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: token }
    );
    setdata(response.data.data);
  };
  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return <div></div>;
};

export default Myorders;
