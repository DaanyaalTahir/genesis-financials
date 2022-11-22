import React, { useState, useEffect } from "react";
import AddressSelect from '../ContactPage/addressSelect';

function ContactPage() {

  const [selectedAddress, setSelectedAddress] = useState(undefined);

  useEffect(() => {
    console.log(selectedAddress);
  }, [selectedAddress]);

  return (
    <div className="gf_general_page"><AddressSelect setSelectedAddress={setSelectedAddress} /> </div>
    
  )
}

export default ContactPage