import { getMostTransactionsLocation } from "../../../api/insights";
import React, { useState, useEffect } from "react";
import { Col, Row, Card, Typography } from "antd";

const { Title } = Typography;

function HighestSpentLocation({ selectedAccount }) {
    const [location, setLocation] = useState(undefined);

    useEffect(() => {
        async function fetchData() {
            let res = await getMostTransactionsLocation({ cardNo: selectedAccount });
            setLocation(res.data[0]);
        }
        fetchData();
    }, [selectedAccount]);

    return (

        <div>
            <Card title="Most Visted Location" bordered={false} className="row1" style={{ textAlign: "center" }}>
                {location && (
                    <Row style={{ textAlign: "center" }}>
                        <Col span={24}>
                            <Title level={2} style={{ color: "#1890ff" }}>
                                {location.Establishment}
                            </Title>
                        </Col>
                        <Col span={24} >
                            <b>Number of Times Visited:</b>
                            <br />
                            <div style={{ color: "#1890ff", fontWeight: "bold" }}>
                                {location.value_occurences}
                            </div>
                        </Col>
                    </Row>
                )}
            </Card>
        </div>
    );
}

export default HighestSpentLocation;