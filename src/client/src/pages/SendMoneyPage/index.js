
import React, { useState, useEffect } from "react";
import { Button, Form, Input, Select, Space, Tooltip, Typography } from "antd";
import AccountSelect from "../SendMoneyPage/accountSelect";
import UsernameSelect from "../SendMoneyPage/usernameSelect";
import NameSelect from "../SendMoneyPage/nameSelect";


const SendMoneyPage = () => {


  const [selectedAccount, setSelectedAccount] = useState(undefined);

  useEffect(() => {
    console.log(selectedAccount);
  }, [selectedAccount]);

  const [selectedUser, setSelectedUser] = useState(undefined);

  useEffect(() => {
    console.log(selectedUser);
  }, [selectedUser]);

  const [selectedName, setSelectedName] = useState(undefined);

  useEffect(() => {
    console.log(selectedName);
  }, [selectedName]);


  return (
    <div>
      

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
      <label>Name:<NameSelect setSelectedName={setSelectedName} /></label> 
      <br></br>
      <label>Username:<UsernameSelect setSelectedUser={setSelectedUser} /></label> 
      <br></br>
      <div> Email: </div>
      <br></br>
      <br></br>
      <br></br>
      <h1>Transfer Details</h1>
      <br></br>
      <label><AccountSelect setSelectedAccount={setSelectedAccount} />
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
