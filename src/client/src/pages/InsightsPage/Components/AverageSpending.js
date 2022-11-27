import { getAvgMonthlySpent, getAvgYearlySpent } from "../../../api/insights";
import React, { useState, useEffect } from "react";
import { Card, Col, Row, Typography } from "antd";
import { numberAsCurrency } from "../../../helpers/numberFormatters";

const { Title } = Typography;

{/*For demo purposes Average mothnly and yearly spending is only for current year and month */ }
function AverageSpending({ selectedAccount }) {
    const [avgMonthlySpent, setAvgMonthlySpent] = useState(undefined);
    const [avgYearlySpent, setAvgYearlySpent] = useState(undefined);

    useEffect(() => {
        async function fetchData() {
            let res = await getAvgMonthlySpent({
                cardNo: selectedAccount,
            });
            setAvgMonthlySpent(res.data);

            res = await getAvgYearlySpent({
                cardNo: selectedAccount,
            });
            setAvgYearlySpent(res.data);
        }

        fetchData();
    }, [selectedAccount]);

    return (
        <div>
            <Card title="Average Spending" bordered={false} className="row1" style={{ textAlign: "center" }}>
                {avgMonthlySpent && avgYearlySpent && (
                    <Row style={{ textAlign: "center" }}>
                        <Col span={12}>
                            <Title level={2} style={{ color: "#3BB143" }}>
                                {numberAsCurrency(avgMonthlySpent[0].Amount)}
                            </Title>
                        </Col>
                        <Col span={12}>
                            <Title level={2} style={{ color: "#db0c26" }}>
                                {numberAsCurrency(avgYearlySpent[0].Amount)}
                            </Title>
                        </Col>
                        <Col span={12}>
                            <b>Average Monthly Spending</b>
                            <br />
                            <br />
                        </Col>
                        <Col span={12}>
                            <b>Average Yearly Spending</b>
                            <br />
                            <br />
                        </Col>


                    </Row>

                )}
            </Card>
        </div>
    );
}

export default AverageSpending;