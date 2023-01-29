import React, { useEffect } from 'react'
import './qandA.css'
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllEnquiry } from '../../actions/EnquiryAction';


const QandA = () => {
  const dispatch = useDispatch();

  const {loading,enquiry}=useSelector((state)=>state.enquiryReducer);

  //  const [filterType, setFilterType] = useState("");
  //  const filteredEnquiries = enquiry.filter(
  //    (i) => i.type === filterType
  //  );
   const types = [...new Set(enquiry.map((enq) => enq.type))];
  
  useEffect(()=>{

    dispatch(getAllEnquiry());
      
  },[])


  return (
    <div className="qandAContainer">
      <img
        className="imagecontainer"
        src="https://azutrade.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffaqbanner.b4c9db40.png&w=3840&q=75"
      />

      <h1 className="OurProductsTitle">
        Most Asked
        <span>Enquiries</span>{" "}
      </h1>
      <div className="mainqandAContainer">
        <div className="manqAndAsub">
          {types.map((type, index) => (
            <div className="EnqtypesContainer" key={type}>
              <h1 className="OurEnquiryTitle">
                <span>
                  {index + 1}.{type}
                </span>
              </h1>
              <div className="EnqContainer">
                {enquiry
                  .filter((enq) => enq.type === type)
                  .map((enq,ind) => (
                    <div className="EnqnameLink" key={enq.name}>
                      <p>{`-`}{enq.name}</p>
                      <a href={enq.link}>Resolve</a>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QandA