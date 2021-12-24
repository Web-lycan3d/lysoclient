/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "./orderdetails.styles.scss";
import OrdersList from "./OrdersList";

const OrderDetails = ({ userData }) => {
  return (
    <div className="order-details-overflow">
      {userData?.length > 0 ? (
        userData.map((item) => <OrdersList item={item} itemS={item.status} />)
      ) : (
        <div className="no-orders">
          <h2>No Files are available</h2>
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
