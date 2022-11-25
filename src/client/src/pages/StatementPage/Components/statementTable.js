import React, { useState, useEffect } from "react";
import { getStatement } from "../../../api/statements";
import { Space, Table, Tag, Button } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { filterData } from '../../../helpers/filterData';
import _ from "lodash";


function StatementTable({ selectedAccount }) {
    const [statement, setStatement] = useState(undefined);
    const [filteredInfo, setFilteredInfo] = useState({});
    const [sortedInfo, setSortedInfo] = useState({});
    const data = [];

    const clearFilters = () => {
        setFilteredInfo({});
    };

    const clearAll = () => {
        setFilteredInfo({});
        setSortedInfo({});
    };

    const setAmountSort = () => {
        setSortedInfo({
            order: 'descend',
            columnKey: 'Amount',
        });
    };

    const setDateSort = () => {
        setSortedInfo({
            order: 'descend',
            columnKey: 'Date',
        });
    };

    const handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        setFilteredInfo(filters);
        setSortedInfo(sorter);
    };

    useEffect(() => {
        async function fetchData() {
            let res = await getStatement({ cardNo: selectedAccount });
            setStatement(res.data);
        }
        fetchData();
    }, [selectedAccount]);



    const columns = [
        {
            title: 'Establishment',
            dataIndex: 'Establishment',
            key: 'Establishment',
            //filters: _.uniqWith(filterData(statement)(i => i.Establishment), _.isEqual),
            //filterSearch: true,
            //onFilter: (i, record) => record.Establishment.includes(i),
        },
        {
            title: 'Category',
            dataIndex: 'Category',
            key: 'Category',
        },
        {
            title: 'Date',
            dataIndex: 'Date',
            key: 'Date',
            sorter: (a, b) => new Date(a.Date) - new Date(b.Date),
            sortOrder: sortedInfo.columnKey === 'Date' ? sortedInfo.order : null,
            filteredValue: filteredInfo.Date || null,
            filters: [
                {
                    text: '2020',
                    value: '2020',
                    children: [
                        {
                            text: 'All',
                            value: '2020',
                        },
                        {
                            text: 'January',
                            value: '2020-01',
                        },
                        {
                            text: 'February',
                            value: '2020-02',
                        },
                    ]
                },
                {
                    text: '2021',
                    value: '2021',
                    children: [
                        {
                            text: 'All',
                            value: '2021',
                        },
                        {
                            text: 'January',
                            value: '2021-01',
                        },
                        {
                            text: 'February',
                            value: '2021-02',
                        },
                    ]
                },
                {
                    text: '2022',
                    value: '2022',
                    children: [
                        {
                            text: 'All',
                            value: '2022',
                        },
                        {
                            text: 'January',
                            value: '2022-01',
                        },
                        {
                            text: 'February',
                            value: '2022-02',
                        },
                    ]
                }
            ],
            filterSearch: true,
            onFilter: (value, record) => record.Date.includes(value),
            ellipsis: true,
        },
        {
            title: 'Time',
            dataIndex: 'Time',
            key: 'Time',
        },
        {
            title: 'Amount ($)',
            dataIndex: 'Amount',
            key: 'Amount',
            sorter: (a, b) => a.Amount - b.Amount,
            sortOrder: sortedInfo.columnKey === 'Amount' ? sortedInfo.order : null,
            ellipsis: true,
        }
    ]

    if (statement) {
        statement.forEach((item) => {
            data.push({
                Establishment: item.Establishment,
                Category: item.Category,
                Date: item.TransactionTime.split("T")[0],
                Time: item.TransactionTime.split("T")[1].slice(0, -1),
                Amount: item.Amount,
            })
        })
    }


    return (
        <>
            <Space
                style={{
                    marginBottom: 16,
                }}
            >
                <Button onClick={setAmountSort}>Sort Amount</Button>
                <Button onClick={setDateSort}>Sort Date</Button>
                {/*<Button onClick={clearFilters}>Clear filters</Button>*/}
                <Button onClick={clearAll}>Clear Filters and Sorters</Button>
            </Space>
            <Table columns={columns} dataSource={data} onChange={handleChange} />
        </>
    );
}

export default StatementTable;