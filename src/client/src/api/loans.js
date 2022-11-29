import Axios from "axios";

export const getLoans = async (values) => {
    // console.log('api', values)
    const body = { ...values };
    try {
        const response = await Axios.post(
            "http://localhost:9000/loans/get_loans/",
            body
        );
        console.log(response)
        return response;
    } catch (err) {
        return false;
    }
};

export const newLoan = async (values) => {
    console.log('api', values)
    const body = { ...values };
    try {
        const response = await Axios.post(
            "http://localhost:9000/loans/new_loan/",
            body
        );
        return response;
    } catch (err) {
        return false;
    }
};