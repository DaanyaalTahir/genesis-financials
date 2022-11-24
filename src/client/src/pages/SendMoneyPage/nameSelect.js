import React, { useEffect, useState } from "react";
import { Input } from "antd";
import { useSelector } from "react-redux";

// const { Option } = Select;

function NameSelect({ setSelectedName }) {

  const user = useSelector((state) => state.user.FName);
  const last = useSelector((state) => state.user.LName);




  return (
    <div>

      <div value={user}><b>Name: </b>{user} {last}</div>
    </div>

  )
}

export default NameSelect;