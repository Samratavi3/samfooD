import React, { useEffect } from "react";
import "./Verify.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import { useContext } from "react";
import axios from "axios";
const Verify = () => {
  const [searchParms, setSearchParams] = useSearchParams();
  const success = searchParms.get("success");
  const orderId = searchParms.get("orderId");
  const { url } = useContext(StoreContext);
  const Navigate = useNavigate();
  const verifypayment = async () => {
    const response = await axios.post(url + "/api/order/verify", {
      success,
      orderId,
    });
    if (response.data.success) {
      Navigate("/myorders");
    } else {
      Navigate("/");
    }
  };
  useEffect(() => {
    verifypayment();
  }, []);

  return (
    <div className="verify">
      <div className="spinner"></div>
    </div>
  );
};

export default Verify;
