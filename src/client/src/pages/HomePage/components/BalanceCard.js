import React, { useState, useEffect } from "react";
import { Col, Row, Card, Typography } from "antd";
import { useSelector } from "react-redux";
import { numberAsCurrency } from "../../../helpers/numberFormatters";
import { getBalance } from "../../../api";

const { Title } = Typography;

function BalanceCard({ selectedAccount }) {
  const [account, setAccount] = useState({
    Amount: "0.00",
    Type: "",
    AccountNo: "",
    ExpiryDate: "",
  });

  useEffect(() => {
    async function getData() {
      let res = await getBalance({ cardNo: selectedAccount });
      setAccount(res.data[0]);
    }
    getData();
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
