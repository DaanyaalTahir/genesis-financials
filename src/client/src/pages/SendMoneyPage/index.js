
import React, { useState, useEffect } from "react";
import { Button, Form, Input, Select, Space, Tooltip, Typography } from "antd";
import AccountSelect from "../SendMoneyPage/accountSelect";
import UsernameSelect from "../SendMoneyPage/usernameSelect";
import NameSelect from "../SendMoneyPage/nameSelect";
import EmailSelect from "../SendMoneyPage/emailSelect";

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

  const [selectedEmail, setSelectedEmail] = useState(undefined);

  useEffect(() => {
    console.log(selectedEmail);
  }, [selectedEmail]);

  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [security, setSecurity] = useState('');
  const [answer, setAnswer] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    alert('You have sent the amount of  $' + amount +' to '+ email)
    setEmail('');
    setAmount('');
    setSecurity('');
    setAnswer('');
    setMessage('');
  }

  return (
    <div>
      

    <form onSubmit={handleSubmit}>
      <fieldset>
      <h1>Send Money to</h1>
      <p><b>Pay the friend back, pay the babysitter or pay the landlord </b></p>
      <label>Email:
        <Input required name= {"email"} type="email" id="email"
        onChange={event => setEmail(event.target.value)}
        value={email}
        />
      </label>
      <br></br>
      <br></br>
      <br></br>
      <h1>Your Details</h1>
      <br></br>
      <label><NameSelect setSelectedName={setSelectedName} /></label> 
      <br></br>
      <label><UsernameSelect setSelectedUser={setSelectedUser} /></label> 
      <br></br>
      <label><EmailSelect setSelectedEmail={setSelectedEmail} /></label> 
      <br></br>
      <br></br>
      <h1>Transfer Details</h1>
      <br></br>
      <label><AccountSelect setSelectedAccount={setSelectedAccount} />
      </label>
      <br></br>
      <br></br>
      <label>Amount:
        <Input required name= "amount" type="number" min="0.01" step="0.01" id="account" 
        onChange={event => setAmount(event.target.value)}
        value={amount}/>
      </label>
      <br></br>
      <br></br>
      <label>Security Question:
        <Input required type="text" 
        onChange={event => setSecurity(event.target.value)}
        value={security}/>
      </label>
      <br></br>
      <br></br>
      <label>Answer:
        <Input required type="text" 
        onChange={event => setAnswer(event.target.value)}
        value={answer}/>
      </label>
      <br></br>
      <br></br>
      <label>Message to Recipient:
        <Input type="text" placeholder="Optional" 
        onChange={event => setMessage(event.target.value)}
        value={message}/>
      </label>
      </fieldset>
      <button type="submit">Continue</button>        
            
    </form>
    </div>
  )
  }

export default SendMoneyPage;
