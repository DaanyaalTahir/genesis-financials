import React, { useState, useEffect } from "react";
import { Descriptions, Card } from "antd";
import { getLastTransaction } from "../../../api/transactions";
import { numberAsCurrency } from "../../../helpers/numberFormatters";

function RecentTransactionCard({ selectedAccount }) {
  const [transaction, setTransaction] = useState(undefined);

  useEffect(() => {
    async function fetchData() {
      let res = await getLastTransaction({ cardNo: selectedAccount });
      setTransaction(res.data[0]);
    }
    fetchData();
  }, [selectedAccount]);

  return (
    <div>
      <Card title="Recent Transaction" bordered={false} className="row1">
        {transaction && (
          <Descriptions
            column={2}
            layout="vertical"
            labelStyle={{ fontWeight: "bold", padding: "0 " }}
            contentStyle={{ padding: "0 " }}
          >
            <Descriptions.Item label="Transaction No">
              {transaction.TransactionNo}
            </Descriptions.Item>
            <Descriptions.Item label="Establishment">
              {transaction.Establishment}
            </Descriptions.Item>
            <Descriptions.Item label="Amount">
              {numberAsCurrency(transaction.Amount)}
            </Descriptions.Item>
            <Descriptions.Item label="Time">
              {new Date(transaction.TransactionTime).toLocaleString()}
            </Descriptions.Item>
          </Descriptions>
        )}
      </Card>
    </div>
  );
}

export default RecentTransactionCard;
