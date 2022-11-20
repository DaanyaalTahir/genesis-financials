import React, { useState, useEffect } from "react";
import { Col, Row, Card } from "antd";
import { colors } from "../../../helpers/chartColors";
import { numberAsCurrency } from "../../../helpers/numberFormatters";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { getCurrentMonthCategorySpending } from "../../../api/transactions";

ChartJS.register(ArcElement, Tooltip, Legend);

function MonthlySpending({ selectedAccount }) {
  const [chartData, setChartData] = useState(undefined);
  const [totalSpent, setTotalSpent] = useState(0);

  useEffect(() => {
    async function fetchData() {
      let res = await getCurrentMonthCategorySpending({
        cardNo: selectedAccount,
      });
      // parse the data
      let data = {
        labels: [],
        datasets: [
          {
            label: "Amount",
            data: [],
            backgroundColor: colors,
          },
        ],
      };
      let total = 0;
      for (const category of res.data) {
        data.labels.push(category.Category);
        data.datasets[0].data.push(category.TotalAmount);
        total += category.TotalAmount;
      }
      setTotalSpent(total);
      setChartData(data);
    }
    fetchData();
  }, [selectedAccount]);

  return (
    <div>
      <Card title="Present Month Spending" bordered={false} className="row1">
        <div>
          <Row style={{ width: "100%" }}>
            <Col span={24}>
              <b>Total Spent:&nbsp;</b>
              {numberAsCurrency(totalSpent)}
            </Col>
            <Col span={24} className="center_canvas">
              {chartData && (
                <Doughnut
                  data={chartData}
                  redraw={true}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                  }}
                />
              )}
            </Col>
          </Row>
        </div>
      </Card>
    </div>
  );
}

export default MonthlySpending;
