/** @format */

import React, { Fragment, useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import OrderOverview from "../../components/AdminDashboard/OrderOverview.component";

import "./admin.styles.scss";

import { useHistory, useParams } from "react-router";
import Api from "../../api/Api";
import OrderDetails from "../../components/Orderdetails/OrderDetails";

const AdminPanel = () => {
  const { id } = useParams();
  const history = useHistory();

  const [option, setOption] = useState("terr");

  const [terrData, setTerrData] = useState([]);
  const [Dataprocess, setDataProcess] = useState([]);
  const [contactData, setcontactData] = useState([]);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const { data } = await Api.get("/user/post/data");

    setTerrData(data.terrData);
    setDataProcess(data.dataProcess);
    setcontactData(data.userContact);
  };

  return (
    <Fragment>
      <div className="admin-dashboard-container">
        {/* {alertState ? (<Alert severity="success">
                    <AlertTitle>Success</AlertTitle>
                    Updated the documents
                </Alert>) : ""} */}
        <div className="admin-dsahboard-header">
          <div className="admin-dashboard-heading">
            <h1>Admin Panel</h1>{" "}
          </div>

          <div className="admin-dashboard-nav">
            <span
              onClick={() => setOption("terr")}
              className={
                option === "terr"
                  ? "admin-dashboard-navlist active"
                  : "admin-dashboard-navlist"
              }>
              Terrain
            </span>
            <span
              onClick={() => setOption("data")}
              className={
                option === "data"
                  ? "admin-dashboard-navlist active"
                  : "admin-dashboard-navlist "
              }>
              Data_Processing
            </span>{" "}
            <span
              onClick={() => setOption("contact")}
              className={
                option === "contact"
                  ? "admin-dashboard-navlist active"
                  : "admin-dashboard-navlist"
              }>
              Contact
            </span>
          </div>
        </div>
        <div layout className="admin-dashboard-content">
          {option === "terr" && <OrderDetails userData={terrData} />}
          {option === "data" && <OrderDetails userData={Dataprocess} />}
          {option === "contact" && <OrderDetails userData={contactData} />}
          {/* {option === "data" && <OrderDetails userData={Dataprocess} />} */}
          {/* {option === "terr" && <OrderDetails userData={terrData} />} */}
          {/* {!option
            ? UserData?.map((data) =>
                data.orders.map((item) => (
                  <OrderOverview userData={item} StateChange={StateChange} />
                ))
              )
            : UserData?.map((data) =>
                data.orders.map(
                  (item) =>
                    (item.orderStatus === "Order Processing" ||
                      item.orderStatus === "In Transit") && (
                      <OrderOverview
                        userData={item}
                        StateChange={StateChange}
                      />
                    )
                )
              )} */}
        </div>
      </div>
    </Fragment>
  );
};

export default AdminPanel;
