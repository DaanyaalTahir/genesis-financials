import React, { useState, useEffect } from "react";
import { getHighestTransaction } from "../../../api/insights";
import { Col, Row, Card, Typography } from "antd";
import { numberAsCurrency } from "../../../helpers/numberFormatters";

const { Title } = Typography;

function HighestTransactionCard({ selectedAccount }) {
    const [highestTransaction, setHighestTransaction] = useState(undefined);

    useEffect(() => {
        async function fetchData() {
            let res = await getHighestTransaction({ cardNo: selectedAccount });
            setHighestTransaction(res.data[0]);
        }
        fetchData();
    }, [selectedAccount]);

    return (
        <div>
            <Card title="Highest Transaction" bordered={false} className="row1" style={{ textAlign: "center" }}>
                {highestTransaction && (
                    <Row style={{ textAlign: "center" }}>
                        <Col span={24}>
                            <Title level={2} style={{ color: "#db0c26" }}>
                                {numberAsCurrency(highestTransaction.maxAmount)}
                            </Title>
                        </Col>
                        <Col span={8}>
                            <b>Establishment: </b>
                            <br />
                            {highestTransaction.Establishment}
                        </Col>
                        <Col span={8}>
                            <b>Transaction No:</b> <br />
                            {highestTransaction.TransactionNo}
                        </Col>
                        <Col span={8}>
                            <b>Time:</b>
                            <br />
                            {new Date(highestTransaction.TransactionTime).toLocaleString()}
                        </Col>
                    </Row>
                )}
            </Card>
        </div>
    );
}

export default HighestTransactionCard;