import React, { useEffect, useState } from "react";
import { Input } from "antd";
import { useSelector } from "react-redux";

// const { Option } = Select;

function EmailSelect({ setSelectedEmail }) {

  const user = useSelector((state) => state.user.Email);


  return (
    <div>

      <div value={user}><b>Email: </b>{user}</div>
    </div>

  )
}

export default EmailSelect;