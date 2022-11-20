import React, { useState, useEffect } from "react";
import { Card } from "antd";
import { getPastTwelveMonthSpending } from "../../../api/transactions";
import { toMonthName } from "../../../helpers/dateFormat";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function SpendingInsightsCard({ selectedAccount }) {
  const [chartData, setChartData] = useState(undefined);
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  useEffect(() => {
    async function fetchData() {
      let res = await getPastTwelveMonthSpending({
        cardNo: selectedAccount,
      });
      // parse the data
      let data = {
        labels: [],
        datasets: [
          {
            label: "Amount",
            data: [],
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgba(53, 162, 235, 0.5)",
          },
        ],
      };

      for (const monthlyAmount of res.data) {
        data.labels.push(
          `${toMonthName(monthlyAmount.Month)} ${monthlyAmount.Year}`
        );
        data.datasets[0].data.push(monthlyAmount.Amount);
      }
      setChartData(data);
    }
    fetchData();
  }, [selectedAccount]);

  return (
    <div>
      <Card title="Spending Insights" bordered={false}>
        <div style={{ position: "relative", height: "250px" }}>
          {chartData && <Line options={options} data={chartData} />}
        </div>
      </Card>
    </div>
  );
}

export default SpendingInsightsCard;
