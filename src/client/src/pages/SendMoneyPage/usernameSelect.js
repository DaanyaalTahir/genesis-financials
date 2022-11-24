import React, { useEffect, useState } from "react";
import { Input } from "antd";
import { useSelector } from "react-redux";

// const { Option } = Select;

function UsernameSelect({ setSelectedUser }) {

  const user = useSelector((state) => state.user.Username);


  return (
    <div>

      <div value={user}><b>Username: </b>{user}</div>
    </div>

  )
}


export default UsernameSelect;


