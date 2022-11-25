import React, { useState, useEffect } from "react";
import { Col, Row, Card } from "antd";
import AccountSelect from "../../components/AccountSelect";
import AverageSpending from "./Components/AverageSpending";
import HighestSpentLocation from "./Components/HighestSpentLocation";
import HighestTransactionCard from "./Components/HighestTransactionCard";
import TopThreeCategoriesCard from "./Components/TopThreeCategoriesCard";


function InsightsPage() {
  const [selectedAccount, setSelectedAccount] = useState(undefined);

  useEffect(() => {
    console.log(selectedAccount);
  }, [selectedAccount]);

  return (
    <div className="insightsPage_Container">
      <AccountSelect setSelectedAccount={setSelectedAccount} />

      {selectedAccount && (
        <div>
          <Col>
            <Row gutter={[16, 16]}>
              <Col span={8}>
                <HighestSpentLocation selectedAccount={selectedAccount} />
              </Col>
              <Col span={8}>
                <HighestTransactionCard selectedAccount={selectedAccount} />
              </Col>
              <Col span={8}>
                <AverageSpending selectedAccount={selectedAccount} />
              </Col>
              <Col span={24}>
                <TopThreeCategoriesCard selectedAccount={selectedAccount} />
              </Col>
            </Row>
          </Col>
        </div>
      )}
    </div>
  )
}

export default InsightsPage