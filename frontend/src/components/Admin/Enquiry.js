import React,{useState}from 'react'
import { useSelector, useDispatch } from "react-redux";
import { createEnquiry } from '../../actions/EnquiryAction';
import './Enquiry.css'

const Enquiry = () => {
   
  const dispatch=useDispatch();
  const [formData, setFormData] = useState({
    type: "",
    name: "",
    link: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send the enquiry to the backend or handle it in some other way
    console.log(formData);
    dispatch(createEnquiry(formData))
    setFormData({
      type: "",
      name: "",
      link: "",
    });
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };




  return (
    <div className='EnquiryContainer'>
   <div>.</div>

   <form className="enquiry-form" onSubmit={handleSubmit}>
      <h1>Create Enquiry </h1>
      <div className="form-field">
        <label htmlFor="name">Type of Enquiry:</label>
        <input id="name" name="type" value={formData.type} onChange={handleChange}>
        </input>
      </div>
 <div className="form-field">
        <label htmlFor="name">Enquiry Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="link">Resolving Link:</label>
        <input
          type="url"
          id="link"
          name="link"
          value={formData.link}
          onChange={handleChange}
          required
        />
      </div>
     
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>



    </div>
  )
}

export default Enquiry