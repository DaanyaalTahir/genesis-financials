import React from "react";
import { Table } from "antd";

function LoansTable({ loan }) {
  const data = [];

  const columns = [
    {
      title: "Loan Type",
      dataIndex: "Type",
      key: "Type",
    },
    {
      title: "Amount",
      dataIndex: "Amount",
      key: "Amount",
    },
    {
      title: "Interest Rate",
      dataIndex: "InterestRate",
      key: "InterestRate",
    },
    {
      title: "Compounded",
      dataIndex: "Compounded",
      key: "Compounded",
    },
    {
      title: "Due Date",
      dataIndex: "DueDate",
      key: "DueDate",
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
      });
    });
  }

  return (
    <>
      <Table columns={columns} dataSource={data} />
    </>
  );
}

export default LoansTable;
