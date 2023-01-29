import React, { useState } from "react";
import Slider from "react-slick";


import "./Slick.css";
// import "slick-carousel/slick/slick-theme.css";

const MemberCert = () => {
  const [slider,useSlider] = useState(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 3500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
            {
              breakpoint: 1200,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
              }
            }
          ],
    afterChange: (current) => {
      // console.log(current);
    },
    beforeChange: (current, next) => {
      // console.log(current, next);
    },
    ref: slider,
  };

  return (
    <section className="team" id="team">
      <h1 className="heading">
        membership & <span>certification</span>
      </h1>
      <Slider {...settings}>
        <div>
          <img
            src="https://cdn.sanity.io/images/kbnh7il4/production/18f9f9ed4efff0adc9171e15f84c12a6b7fe5c90-400x400.jpg?w=500"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn.sanity.io/images/kbnh7il4/production/acf6dafe248d4ca22b38a911d70b03c2e78549cf-400x400.png?w=500"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn.sanity.io/images/kbnh7il4/production/c97613b23d5dd2860d96107445222887d52d3c05-400x400.png?w=500"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn.sanity.io/images/kbnh7il4/production/a6dba6b057cdade1ad9166dcc2c92529b787272d-400x400.png?w=500"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn.sanity.io/images/kbnh7il4/production/9405c9798dc0e15060bcec02bf9540920d8be84d-400x400.png?w=500"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn.sanity.io/images/kbnh7il4/production/5e3b6cce4aa5df31d8764bca7804d746bda13011-400x400.png?w=500"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn.sanity.io/images/kbnh7il4/production/7b87eaa1164fcee9d4311639d135675051f1fc4c-400x400.png?w=500"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn.sanity.io/images/kbnh7il4/production/c97613b23d5dd2860d96107445222887d52d3c05-400x400.png?w=500"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn.sanity.io/images/kbnh7il4/production/e0feee377f0ad3108d23879a3e03c612d0330de6-400x400.jpg?w=500"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn.sanity.io/images/kbnh7il4/production/7b87eaa1164fcee9d4311639d135675051f1fc4c-400x400.png?w=500"
            alt=""
          />
        </div>
      </Slider>
    </section>
  );
};

export default MemberCert;
