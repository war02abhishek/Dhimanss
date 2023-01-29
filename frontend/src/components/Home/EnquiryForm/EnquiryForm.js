import React from "react";
import ContactCard from "./ContactCard";
import "./EnquiryForm.css";

import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";

const EnquiryForm = () => {
  return (
    <div className="ConatctContainerMain">
      <ContactCard
        Title={"Our Email"}
        type1={"azutradeindia@gmail.com"}
        type2={"explore@azutrade.com"}
        icon={<MdEmail size={35} color="white" />}
      />
      <ContactCard
        Title={"Our Phone No."}
        type1={"+91-9405823171"}
        type2={"+91-9356178237"}
        icon={<BsFillTelephoneFill size={35} color="white" />}
      />
      <ContactCard
        Title={"Our Address"}
        type1={"Ganesh colony,dasara maidan road Amaravati - 444605"}
        type2={""}
        icon={<HiLocationMarker size={35} color="white" />}
      />
      
    </div>
  );
};

export default EnquiryForm;
