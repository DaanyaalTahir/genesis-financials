import React, { useState, useEffect } from "react";
import AddressSelect from '../ContactPage/addressSelect';
import { contact } from "../../api";

const ContactPage = () => {

  const [selectedAddress, setSelectedAddress] = useState(undefined);
  useEffect(() => {
    console.log(selectedAddress);
  }, [selectedAddress]);
  const handleSubmit = async event => {

  

   

    let response = await contact
    ({AddressID: selectedAddress})
    console.log(response)
    if(response.data.message == "Success"){
      console.log("")
    }
  }

  return (
    <div> <h1> <AddressSelect setSelectedAddress={handleSubmit}> </AddressSelect> </h1> </div>
  )
}

export default ContactPage