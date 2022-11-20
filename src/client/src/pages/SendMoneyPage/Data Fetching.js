import React, { useEffect, useState } from "react";
import { Input } from "antd";
import { useSelector } from "react-redux";

// const { Option } = Select;

function UsernameSelect({ setSelectedUser }) {

  const [parsedUsers, setParsedUsers] = useState(null);
  const user = useSelector((state) => state.user.Username);

  useEffect(() => {
    setParsedUsers(
        Object.keys(user).map((users) => {
        return { key: users.Username, label: `${user}` };

      })
    );
    setSelectedUser(user[0].Username);
  }, [setSelectedUser, setParsedUsers, user]);

  const handleChange = (value) => {
    setSelectedUser(value);
  };

  return (
    <div>
      {parsedUsers && (
        <div>
          
           <div defaultValue={parsedUsers[0].key} onChange={handleChange}>
            {parsedUsers.map((user) => {
              return <div value={user.key}>{user.label}</div>;
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default UsernameSelect;
  



  
//   const [parsedUser, setParsedUser] = useState(null);
//   const user = useSelector((state) => state.user.Username);

//   useEffect(() => {
//     setParsedUser(
//       user.map((users) => {
//         return { key: users.Username, label: users.Username };
//       })
//     );
//     setUser(user[0].Username);
//   }, [setUser, setParsedUser, user]);

//   const handleChange = (value) => {
//     setUser(value);
//   };

//   return (
//     <div>
//       {parsedUser && (
//         <div >
        
//           <Input  defaultValue={parsedUser[0].key} onChange={handleChange}>
//             {parsedUser.map((users) => {
//               return <Input value={users.key}>{users.label}</Input>;
//             })}
//           </Input>
//         </div>
//       )}
//     </div>
//   );
// }

// export default UsernameSelect;

