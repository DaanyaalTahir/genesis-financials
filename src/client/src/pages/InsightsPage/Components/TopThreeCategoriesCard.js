import React, { useState, useEffect } from "react";
import { getTopThreeCategories } from "../../../api/insights";
import { Card, Col, Row } from "antd";
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

function TopThreeCategoriesCard({ selectedAccount }) {
    const [chartData, setChartData] = useState(undefined);
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
                ticks: {
                    font: {
                        size: 14,
                        weight: 'bold',
                    }
                }
            },
            x: {
                ticks: {
                    font: {
                        size: 14,
                        weight: 'bold',
                    }
                }
            }
        }
    };

    useEffect(() => {
        async function fetchData() {
            let res = await getTopThreeCategories({
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

            for (const Category of res.data) {
                data.labels.push(
                    `${Category.Category}`
                );
                data.datasets[0].data.push(Category.Amount);
                console.log(Category.Amount);
            }
            setChartData(data);
        }
        fetchData();
    }, [selectedAccount]);

    return (
        <div>
            <Card title="Top Three Spending Categories" bordered={false} className="row1" style={{ textAlign: "center" }}>
                <div style={{ position: "relative", height: "300px" }}>
                    {chartData && <Line options={options} data={chartData} />}
                </div>
            </Card>
        </div>
    );
}

export default TopThreeCategoriesCard