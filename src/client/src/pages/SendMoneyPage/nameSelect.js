import React, { useEffect, useState } from "react";
import { Input } from "antd";
import { useSelector } from "react-redux";

// const { Option } = Select;

function NameSelect({ setSelectedName }) {

  const [parsedNames, setParsedNames] = useState(null);
  const user = useSelector((state) => state.user.FName);

  useEffect(() => {
    setParsedNames(
        Object.keys(user).map((names) => {
        return { key: names.FName, label: `${user}` };

      })
    );
    setSelectedName(user[0].FName);
  }, [setSelectedName, setParsedNames, user]);

  const handleChange = (value) => {
    setSelectedName(value);
  };

  return (
    <div>
      {parsedNames && (
        <div>
          
           <div defaultValue={parsedNames[0].key} onChange={handleChange}>
            {parsedNames.map((user) => {
              return <div value={user.key}>{user.label}</div>;
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default NameSelect;