import React, { useState, useEffect } from "react";
import { Col, Row, Card } from "antd";
import AccountSelect from "../../components/AccountSelect";

const HomePage = () => {
  const [selectedAccount, setSelectedAccount] = useState(undefined);

  useEffect(() => {
    console.log(selectedAccount);
  }, [selectedAccount]);

  return (
    <>
      <AccountSelect setSelectedAccount={setSelectedAccount} />

      {selectedAccount && (
        <div>
          <Col>
            <Row gutter={[16, 16]}>
              <Col span={8}>
                <Card title="Balance" bordered={false}>
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Recent Transaction" bordered={false}>
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Spending" bordered={false}>
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
              </Col>
              <Col span={24}>
                <Card title="Spending Insights" bordered={false}>
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
              </Col>
            </Row>
          </Col>
        </div>
      )}
    </>
  );
};

export default HomePage;
