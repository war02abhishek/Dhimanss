import React from 'react'
import  './WhyChoose.css'
import WhyChooseCard from './WhyChooseCard';
import {FaStar} from "react-icons/fa"
import { FaDollarSign, FaHandshake } from "react-icons/fa";
import {RiTeamFill} from "react-icons/ri"

const WhyChoose = () => {
  return (
    <>
      <div className="WhyChooseContainer">
        <h1 className="whyChooseTitle">
          Why
          <span>Choose Us?</span>{" "}
        </h1>
        <hr className="whyChooseUnderline" />

        <div className="WhyChooseCardContainer">
          <WhyChooseCard
            desc={"Please Dont bargin"}
            title={"No Compromise in quality"}
            icon={<FaStar size={70} color="#ff7800" />}
          />
          <WhyChooseCard
            desc={
              "PWe add only 5-9% of our margins. We're many things but not greedy. 😎"
            }
            title={"Transparent And Precise Prices"}
            icon={<FaDollarSign size={70} color="#ff7800" />}
          />
          <WhyChooseCard
            desc={
              "Let's date with just one trade and then get married for rest of the trades. ❤️"
            }
            title={"Our Actions Follow The Aim Of Creating Long Term Bond."}
            icon={<FaHandshake size={70} color="#ff7800" />}
          />
          <WhyChooseCard
            desc={"Just try us once!"}
            title={"We Care And Are Here For Assistance At Any Point."}
            icon={<RiTeamFill size={70} color="#ff7800" />}
          />
        </div>
      </div>
    </>
  );
}

export default WhyChoose