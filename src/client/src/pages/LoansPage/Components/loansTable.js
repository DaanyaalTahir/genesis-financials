import React, {useState, useEffect} from "react";
import {getLoans} from "../../../api/loans";
import {Table} from 'antd';

function LoansTable({SIN}) {

    const [loan, setLoan] = useState(undefined);

    const data = [];

    useEffect(() => {
        async function fetchData() {
            let res = await getLoans({SIN: SIN});
            console.log('hello', res);
            setLoan(res.data);
        }

        fetchData();
    }, [SIN]);

    const columns = [
        {
            title: 'Loan Type',
            dataIndex: 'Type',
            key: 'Type',
        },
        {
            title: 'Amount',
            dataIndex: 'Amount',
            key: 'Amount',
        },
        {
            title: 'Interest Rate',
            dataIndex: 'InterestRate',
            key: 'InterestRate',
        },
        {
            title: 'Compounded',
            dataIndex: 'Compounded',
            key: 'Compounded',
        },
        {
            title: 'Due Date',
            dataIndex: 'DueDate',
            key: 'DueDate',
        },
    ];


    if (loan) {
        loan.forEach((item) => {
            data.push({
                Type: item.Type,
                Amount: item.Amount,
                InterestRate: item.InterestRate,
                Compounded: item.Compounded,
                DueDate: item.DueDate.split("T")[0],
            })
        })
    }

    return (
        <>
            <Table columns={columns} dataSource={data}/>
        </>
    );
}

export default LoansTable;