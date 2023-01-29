import React, { useState } from "react";
import ContactCard from "./ContactCard";
import "./EnquiryForm.css";

import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";

const ContactForm = () => {


  const initialstate = {
    name: "",
    email: "",
    number: "",
    nation: "",
    msg: "",
  };
  const [formData, setFormData] = useState(initialstate);

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    setFormData({ name: "", email: "", number: "", nation: "", msg: "" });

  };

  return (
    <section className="contact" id="contact">
      <h1 className="heading">
        enquiry <span>form</span>{" "}
      </h1>
      <div className="row">
        <form
          onSubmit={handleSubmit}
        >
          <h3>Ask for the Goddamn enquiry. We need to pay the rent</h3>
          <div className="inputBox">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Company Name"
              className="box"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="box"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="inputBox">
            <input
              type="number"
              name="number"
              id="number"
              placeholder="Enter your Phone No."
              className="box"
              value={formData.number}
              onChange={handleChange}
            />
            <input
              type="text"
              name="nation"
              id="state"
              placeholder="Enter your Nation"
              className="box"
              value={formData.nation}
              onChange={handleChange}
            />
          </div>
          <textarea
            placeholder="How can we help You?"
            name="msg"
            id="msg"
            cols="30"
            rows="10"
            value={formData.msg}
            onChange={handleChange}
          ></textarea>

          <button className="btn" type="submit">
            send message
          </button>
        </form>
        <iframe
  
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.769673622174!2d79.08173332425834!3d21.081859541093337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf189729666d%3A0xcb08c9d1ea7910f2!2sJayanti%20Nagari%20II%2C%20Beltarodi%20Rd%2C%20Besa%2C%20Nagpur%2C%20Maharashtra%20440027!5e0!3m2!1sen!2sin!4v1659519186389!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.9972861335564!2d77.11617251428456!3d28.749497985530116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0138a74f7da7%3A0xf09fad683c23bd5d!2sDelhi%20Technological%20University!5e0!3m2!1sen!2sin!4v1674632637008!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe> */}
      </div>
      <div className="ConatctContainerMain">
        <ContactCard
          Title={"Our Email"}
          type1={"azutradeindia@gmail.com"}
          type2={"explore@azutrade.com"}
          icon={<MdEmail size={40} color="white" />}
        />
        <ContactCard
          Title={"Our Phone No."}
          type1={"+91-9405823171"}
          type2={"+91-9356178237"}
          icon={<BsFillTelephoneFill size={40} color="white" />}
        />
        <ContactCard
          Title={"Our Address"}
          type1={"Ganesh colony,dasara maidan road Amaravati - 444605"}
          type2={""}
          icon={<HiLocationMarker size={40} color="white" />}
        />
      </div>
    </section>
  );
};

export default ContactForm;
