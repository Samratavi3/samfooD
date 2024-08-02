import React from "react";
import "./Header.css";
import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your Food here</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos,
          cupiditate voluptatum? Beatae molestias quisquam ut, ipsum laboriosam
          ad vero possimus omnis dignissimos sequi repellat sit exercitationem,
          voluptate asperiores totam error!
        </p>
        <button>View menu</button>
      </div>
    </div>
  );
};

export default Header;
