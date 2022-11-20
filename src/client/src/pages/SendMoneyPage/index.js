<<<<<<< Updated upstream

import React, { useState, useEffect } from "react";
import { Button, Form, Input, Select, Space, Tooltip, Typography } from "antd";
import AccountSelect from "./accountSelect";
import UsernameSelect from "./Data Fetching";
// import AccountSelect from "../../components/AccountSelect";

const SendMoneyPage = () => {


  const [selectedAccount, setSelectedAccount] = useState(undefined);

  useEffect(() => {
    console.log(selectedAccount);
  }, [selectedAccount]);

  const [selectedUser, setSelectedUser] = useState(undefined);

  useEffect(() => {
    console.log(selectedUser);
  }, [selectedUser]);


  return (
    <div>
      
      
=======
import React from "react";
import { Button, Form, Input, Select, Space, Tooltip, Typography } from "antd";
import DataFetching from "../../api/Data Fetching";

function SendMoneyPage()  {

  return (
    <div>
   
>>>>>>> Stashed changes

    <Form>
      <h1>Send Money to</h1>
      <p><b>Pay the friend back, pay the babysitter or pay the landlord </b></p>
      <label>Email:
        <Input name= "email" type="email"/>
      </label>
      <br></br>
      <br></br>
      <br></br>
      <h1>Your Details</h1>
      <div> Name: </div>
      <br></br>
<<<<<<< Updated upstream
      <label>Username:<UsernameSelect setSelectedUser={setSelectedUser} /></label> 
      <br></br>
      <div> Email: </div>
=======
      <div> Username:</div>
      <br></br>
      <div> Email:</div>
>>>>>>> Stashed changes
      <br></br>
      <br></br>
      <br></br>
      <h1>Transfer Details</h1>
      <br></br>
<<<<<<< Updated upstream
      <label><AccountSelect setSelectedAccount={setSelectedAccount} />
=======
      <label>Withdraw From:
        <Select name= "account"></Select>
>>>>>>> Stashed changes
      </label>
      <br></br>
      <br></br>
      <label>Amount:
        <Input name= "amount" type="number" min="0.01" step="0.01" />
      </label>
      <br></br>
      <br></br>
      <label>Security Question:
        <Input type="text" />
      </label>
      <br></br>
      <br></br>
      <label>Answer:
        <Input type="text" />
      </label>
      <br></br>
      <br></br>
      <label>Message to Recipient:
        <Input type="text" />
      </label>
      <Button type="primary" htmlType="submit">
              Continue
            </Button>
    </Form>
    </div>
  )
  }

export default SendMoneyPage;

