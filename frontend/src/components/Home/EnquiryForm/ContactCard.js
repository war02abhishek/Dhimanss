import React from 'react'
import './ContactCard.css'


const ContactCard = ({Title,type1,type2,icon}) => {
  return (
    <>
      <div className="ContactCard">
        <div className="ContactCardDetail">
          <div className='ContactIcon'>{icon}</div>
          <h3>{Title}</h3>
          <span>{type1}</span>
          <span>{type2}</span>
        </div>
      </div>
    </>
  );
}

export default ContactCard