import React, { useState, useEffect } from "react";
import { Col, Row, Card } from "antd";
import AccountSelect from "../../components/AccountSelect";
import BalanceCard from "./components/BalanceCard";
import RecentTransactionCard from "./components/RecentTransactionCard";
import MonthlySpending from "./components/MonthlySpending";
import SpendingInsightsCard from "./components/SpendingInsightsCard";

import "./Homepage.scss";

const HomePage = () => {
  const [selectedAccount, setSelectedAccount] = useState(undefined);

  useEffect(() => {
    console.log(selectedAccount);
  }, [selectedAccount]);

  return (
    <div className="Homepage_Cont">
      <AccountSelect setSelectedAccount={setSelectedAccount} />

      {selectedAccount && (
        <div>
          <Col>
            <Row gutter={[16, 16]}>
              <Col span={8}>
                <BalanceCard selectedAccount={selectedAccount} />
              </Col>
              <Col span={8}>
                <RecentTransactionCard selectedAccount={selectedAccount} />
              </Col>
              <Col span={8}>
                <MonthlySpending selectedAccount={selectedAccount} />
              </Col>
              <Col span={24}>
                <SpendingInsightsCard selectedAccount={selectedAccount} />
              </Col>
            </Row>
          </Col>
        </div>
      )}
    </div>
  );
};

export default HomePage;
