/** @format */

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Sectors } from "../../components/Sectors";
import "./sector.styles.scss";

const Sector = (props) => {
  const [secletedItem, setsecletedItem] = useState("");
  const [secletedType, setsecletedType] = useState("");

  const id = props.match.params.id;

  useEffect(() => {
    const selectedSector = Sectors.find((item) => {
      return item.id === parseInt(id);
    });

    setsecletedItem(selectedSector);
  }, [id]);

  const query = window.Qs.parse(window.location.search, {
    ignoreQueryPrefix: true,
  });

  useEffect(() => {
    const mapTypes = secletedItem?.types?.find((item) => {
      return item.itemName === query.type;
    });

    setsecletedType(mapTypes);
  }, [secletedItem, query.type]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.6 }}
      className="sector-container"
      style={{
        backgroundImage: `url(${secletedType?.bg})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "initial",
        backgroundOrigin: "initial",
        backgroundClip: "initial",
        backgroundColor: "initial",
      }}>
      <h2>{secletedItem.name}</h2>
      <div className="sector-contents">
        <motion.div className="sector-sidebar">
          {secletedItem?.types?.map((data, index) => (
            <motion.div
                initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index / 1.75 }}
              className={
                data.itemName === query.type
                  ? "sector-sidebar-box sector-sidebar-box-bg"
                  : "sector-sidebar-box"
              }
              key={index}>
              <Link to={`/sector/${id}?type=${data.itemName}`}>
                <span>{data.itemName}</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="sector-items">
          <div className="sector-img">
            <img src={secletedType?.imgUrl} alt="sector img" />
          </div>
          <div className="sector-item-flex">
            <div className="sector-item-details">
              <h3>{secletedType?.itemName}</h3>
              <p>{secletedType?.itemDetails + "..."} </p>
              <div className="read-more">
                <Link
                  to={`/read/sector/?sectorName=${secletedItem?.name}&sectorId=${secletedType?.itemName}`}>
                  Read more
                </Link>
              </div>
            </div>
            <div className="sector-details">
              <h3>Benefits</h3>
              <div className="sector-details-flex">
                <div className="sector-detail-p">
                  {secletedItem?.details?.map((data, index) => (
                    <p key={index}>{data.desp} </p>
                  ))}
                </div>
                {/* <div className="sector-detail-p">
                  {secletedItem?.details?.map(
                    (data, index) =>
                      index >= 3 &&
                      index <= 6 && <p key={index}>{data.desp} </p>
                  )}
                </div>
                <div className="sector-detail-p">
                  {secletedItem?.details?.map(
                    (data, index) =>
                      index >= 6 && <p key={index}>{data.desp} </p>
                  )}
                </div> */}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Sector;
