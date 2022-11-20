


// function DataFetching(){

//     const [posts, setPosts] = useState([])
//     useEffect(() => {
  
//       axios.get('src/client/src/api/index.js')
//       .then(res => {
//         console.log(res)
//         setPosts(res.data)
//       })
//       .catch(err => {
//         console.log(err)
//       })
  
//     })
//   return (
//   <div>
//   <ul>
//     {posts.map (post => (
//       <li key= {post.id} > {post.FName} </li>
//     ))}
//   </ul>
// </div>

// )
// }

// export default DataFetching

// import Axios from "axios";

// export const onLogin = async (values) => {
//   const body = { ...values };
//   try {
//     const response = await Axios.post(
//       "http://localhost:9000/users/login/",
//       body
//     );
//     console.log(response);
//     return response;
//   } catch (err) {
//     return false;
//   }
// };


// export default onLogin;

import React, {useState, useEffect} from "react";
import Axios from "axios";

export const DataFetching = async (values) => {
  const body = { ...values };
  try {
    const response = await Axios.post(
      "http://localhost:9000/users/login/",
      body
    );
    console.log(response);
    return response;
  } catch (err) {
    return false;
  }
};

export default DataFetching
