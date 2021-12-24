/** @format */

import React, { Fragment, useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import validator from "validator";
import Api from "../../api/Api";
import "./contact.styles.scss";

const Contact = () => {
  const [contactData, setContactData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });
  const [phnerr, setPhnerr] = useState("");
  const [formSuccess, setFormSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validatePhone = validator.isMobilePhone(contactData.phone, ["en-IN"]);
    if (validatePhone) {
      setPhnerr("");
      console.log(contactData);
      Api.post("/user/contactuser", { contactData });
      setFormSuccess(true);
    } else {
      setPhnerr("Not a valid phone number");
    }
  };
  return (
    <Fragment>
      <div className="contact-container">
        <div className="contact-left">
          <h1>
            We'd love to hear from <span>you.</span>
          </h1>
          <img src="https://i.ibb.co/F4zkJnm/Lyso-Map-min.png" alt="" />
        </div>
        <div className="contact-right">
          <h2>Contact us</h2>
          {formSuccess ? (
            <div className="formsuccess">
              {/* <img src="https://i.ibb.co/hYNwtd4/Group-5520-min.png" alt="" /> */}
              <span>Thank you</span>
              <span>Our Executive will get back to you soon.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-container">
                <label for="firstname" className="contact-label">
                  First Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  required
                  placeholder="Enter your first Name"
                  name="firstname"
                  minLength="4"
                  onChange={(e) =>
                    setContactData({
                      ...contactData,
                      firstname: e.target.value,
                    })
                  }
                  className="inputlist1"></input>
              </div>
              <div className="form-container">
                <label for="lastname" className="contact-label">
                  last Name
                </label>
                <input
                  type="text"
                  id="last_name"
                  required
                  placeholder="Enter your last Name"
                  name="lastname"
                  onChange={(e) =>
                    setContactData({ ...contactData, lastname: e.target.value })
                  }
                  className="inputlist1"></input>
              </div>
              <div className="form-container">
                <label for="email" className="contact-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="Enter your email"
                  name="email"
                  onChange={(e) =>
                    setContactData({ ...contactData, email: e.target.value })
                  }
                  className="inputlist1"></input>
              </div>
              <div className="form-container">
                <label for="phone" className="contact-label">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Enter your number"
                  name="phone"
                  required
                  onChange={(e) =>
                    setContactData({ ...contactData, phone: e.target.value })
                  }
                  className="inputlist1"></input>
                <span className="phnerr">{phnerr}</span>
              </div>
              <div className="form-container2">
                <label
                  for="message"
                  className="contact-label"
                  id="message"
                  placeholder="Enter your message"
                  name="message">
                  Message
                </label>
                <input
                  type="text"
                  id="message"
                  placeholder="Enter your message"
                  name="message"
                  onChange={(e) =>
                    setContactData({ ...contactData, message: e.target.value })
                  }
                  className="inputlist2"></input>
              </div>
              <button type="submit" className="btn btn-blue">
                Submit <BsArrowRightShort />
              </button>
            </form>
          )}
          <div className="contact-details">
            <div className="contact-content">
              <span>EMAIL US</span>
              <p>Contactus@lyso.in</p>
            </div>
            <div className="contact-content">
              <span>PHONE NO.</span>
              <p>+91 9591807979/7795194375</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
