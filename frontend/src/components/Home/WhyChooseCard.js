import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import "./WhyChooseCard.css";
import BsFillStarFill from "react-icons/bs";
import GiRoundStar from "react-icons/gi"
import {FaStar} from "react-icons/fa"

const WhyChooseCard = ({desc,title,icon}) => {
 
  return (
    <Fragment>
      <div className="ServiceCard">
        <div className="ImageContainer">
          {/* <BsFillStarFill/> */}
          {/* <GiRoundStar/> */}
          {/* <{icon} size={70} color="#ff7800" /> */}
          {icon }
        </div>
        <h1 className="ServiceName">{title}</h1>
        <p className="ServiceDescription">{desc}</p>
      </div>
    </Fragment>
  );
};

export default WhyChooseCard;
