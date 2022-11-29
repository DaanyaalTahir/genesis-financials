import React from "react";
import "./loansPage.scss"
// import {newLoan} from "../../api/loans";
import {Button, Input, Select, Form, DatePicker} from "antd";
import LoansTable from "./Components/loansTable";
import {useSelector} from "react-redux";
import {newLoan} from "../../api/loans";

const {TextArea} = Input;

const LoansPage = () => {

    const SIN = useSelector((state) => state.user.SIN);

    const handleSubmit = async (values) => {
        let response = await newLoan({SIN: SIN, Type: values.Type, Amount: values.Amount, DueDate: values.DueDate.format("YYYY-MM-DD")});
        if (response.data.message === "Success") {
            alert("Success!");
        }
    }

    return (
        <div className=" ">
            <div className="gf_general_page ">
                <h2>Loans</h2>
                <div className="">
                    <div className="">
                        <h1>Apply for a New Loan</h1>
                        <Form onFinish={handleSubmit}>
                            <Form.Item required label="Loan Type" name="Type">
                                <Select>
                                    <Select.Option value="MORTGAGE">Mortgage</Select.Option>
                                    <Select.Option value="LINE OF CREDIT">Line Of Credit</Select.Option>
                                </Select>
                            </Form.Item>
                            <Form.Item required label="Amount" name="Amount">
                                <Input required name="amount" type="number" min="0.01" step="0.01" id="account"
                                       placeholder="$3423.00"
                                />
                            </Form.Item>
                            <Form.Item required label="Repayment Date" name="DueDate">
                                <DatePicker/>
                            </Form.Item>
                            <Form.Item label="Message">
                                <TextArea placeholder="To buy a house..." rows={4}/>
                            </Form.Item>
                            <Button type="primary" htmlType="submit">Apply</Button>
                        </Form>
                        <hr/>
                        <h1>Existing Loans</h1>
                    </div>
                </div>
                <LoansTable SIN={SIN}></LoansTable>
            </div>
        </div>
    )
}

export default LoansPage