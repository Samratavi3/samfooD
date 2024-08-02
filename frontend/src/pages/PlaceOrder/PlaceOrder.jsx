import React, { useContext, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";
const PlaceOrder = () => {
  const { getTotalCartAmount, token, foodlist, cartItems, url } =
    useContext(StoreContext);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangerHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const placeorder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    foodlist.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["qunatity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    };
    let response = await axios.post(url + "/api/order/place", orderData, {
      headers: { token },
    });
    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);
    } else {
      alert("error");
    }
  };

  return (
    <form onSubmit={placeorder} className="placeorder">
      <div className="placeorder-left">
        <p className="title">Delivery information</p>
        <div className="multi-fields">
          <input
            requried
            name="firstName"
            onChange={onChangerHandler}
            value={data.firstName}
            type="text"
            placeholder="First Name"
          />
          <input
            requried
            name="lastName"
            onChange={onChangerHandler}
            value={data.lastName}
            type="text"
            placeholder="Last name"
          />
        </div>
        <input
          requried
          name="email"
          onChange={onChangerHandler}
          value={data.email}
          type="email"
          placeholder="Email address"
        />
        <input
          requried
          name="street"
          onChange={onChangerHandler}
          value={data.street}
          type="text"
          placeholder="Street"
        />
        <div className="multi-fields">
          <input
            requried
            name="city"
            onChange={onChangerHandler}
            value={data.city}
            type="text"
            placeholder="city"
          />
          <input
            requried
            name="state"
            onChange={onChangerHandler}
            value={data.state}
            type="text"
            placeholder="State"
          />
        </div>
        <div className="multi-fields">
          <input
            requried
            name="zipcode"
            onChange={onChangerHandler}
            value={data.zipcode}
            type="text"
            placeholder="Zip code"
          />
          <input
            requried
            name="country"
            onChange={onChangerHandler}
            value={data.country}
            type="text"
            placeholder="country"
          />
        </div>
        <input
          requried
          name="phone"
          onChange={onChangerHandler}
          value={data.phone}
          type="text"
          placeholder="Phone"
        />
      </div>
      <div className="placeorder-right">
        <div className="cart-total">
          <h2>Cart total</h2>
          <div>
            <div className="cart-total-details">
              <p>SubTotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>CElivery Fee</p>
              <p>{getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
          </div>
          <button type="Submit">Procced to payment</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
