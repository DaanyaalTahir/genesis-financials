import React, { useState, useEffect } from "react";
import {
  Button,
  Form,
  Input,
  Select,
  Space,
  Tooltip,
  Typography,
  Card,
} from "antd";
import AccountSelect from "../SendMoneyPage/accountSelect";
import UsernameSelect from "../SendMoneyPage/usernameSelect";
import NameSelect from "../SendMoneyPage/nameSelect";
import EmailSelect from "../SendMoneyPage/emailSelect";
import { etransfer } from "../../api";
import "./sendMoney.scss";

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

  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [security, setSecurity] = useState("");
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert("You have sent the amount of  $" + amount + " to " + email);

    let response = await etransfer({ cardNo: selectedAccount, amount: amount });
    console.log(response);
    if (response.data.message == "Success") {
      console.log("");

      setEmail("");
      setAmount("");
      setSecurity("");
      setAnswer("");
      setMessage("");
    }
  };

  return (
    <div className="SendMoney_Cont">
      {" "}
      <div class="form-center">
        <form onSubmit={handleSubmit}>
          {" "}
          <Card class="form-class" style={{ width: 600 }}>
            <fieldset>
              <h1>Send Money to</h1>
              <label>
                Email:
                <Input
                  required
                  name={"email"}
                  type="email"
                  id="email"
                  placeholder="hello@gmail.com"
                  onChange={(event) => setEmail(event.target.value)}
                  value={email}
                />
              </label>
              <br></br>
              <br></br>
              <br></br>
              <h1>Your Details</h1>
              <br></br>
              <label>
                <NameSelect setSelectedName={setSelectedName} />
              </label>
              <label>
                <UsernameSelect setSelectedUser={setSelectedUser} />
              </label>
              <label>
                <EmailSelect setSelectedEmail={setSelectedEmail} />
              </label>
              <br></br>
              <br></br>
              <h1>Transfer Details</h1>
              <br></br>
              <label>
                <AccountSelect setSelectedAccount={setSelectedAccount} />
              </label>
              <br></br>
              <br></br>
              <label>
                Amount:
                <Input
                  required
                  name="amount"
                  type="number"
                  min="0.01"
                  step="0.01"
                  id="account"
                  placeholder="$3423.00"
                  onChange={(event) => setAmount(event.target.value)}
                  value={amount}
                />
              </label>
              <br></br>
              <br></br>
              <label>
                Security Question:
                <Input
                  required
                  type="text"
                  placeholder="Question"
                  onChange={(event) => setSecurity(event.target.value)}
                  value={security}
                />
              </label>
              <br></br>
              <br></br>
              <label>
                Answer:
                <Input
                  required
                  type="text"
                  placeholder="Answer"
                  onChange={(event) => setAnswer(event.target.value)}
                  value={answer}
                />
              </label>
              <br></br>
              <br></br>
              <label>
                Message to Recipient:
                <Input
                  type="text"
                  placeholder="Optional"
                  onChange={(event) => setMessage(event.target.value)}
                  value={message}
                />
              </label>
            </fieldset>
            <br></br>
            <Button type="submit" htmlType="submit">
              Continue
            </Button>
          </Card>
        </form>
      </div>
    </div>
  );
};

export default SendMoneyPage;
