import React, { useState, useEffect } from "react";
import { Col, Row, Card, Typography } from "antd";
import { useSelector } from "react-redux";
import { numberAsCurrency } from "../../../helpers/numberFormatters";

const { Title } = Typography;

function BalanceCard({ selectedAccount }) {
  const [account, setAccount] = useState("0.00");
  const accounts = useSelector((state) => state.accounts.userAccounts);

  useEffect(() => {
    for (const account of accounts)
      if (account.CardNo == selectedAccount) setAccount(account);
  }, [selectedAccount]);

  return (
    <div>
      <Card title="Balance" bordered={false} className="row1">
        <Row style={{ textAlign: "center" }}>
          <Col span={24}>
            <Title level={1} style={{ color: "#5F8D4E" }}>
              {numberAsCurrency(account.Amount)}
            </Title>
          </Col>
          <Col span={8}>
            <b>Type: </b>
            <br />
            {account.Type}
          </Col>
          <Col span={8}>
            <b>Card Expiry:</b> <br />
            {account.ExpiryDate}
          </Col>
          <Col span={8}>
            <b>Account No:</b>
            <br />
            {account.AccountNo}
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default BalanceCard;
