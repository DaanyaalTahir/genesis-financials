import React, { useEffect, useState } from "react";
import { Input } from "antd";
import { useSelector } from "react-redux";

// const { Option } = Select;

function AddressSelect({ setSelectedAddress }) {

  const user = useSelector((state) => state.user.HomeBranch);


  return (
    <div>
    
           <div value={user}><b>Contact Us:</b>{user}</div>
           </div> 
        
      )}


export default AddressSelect;