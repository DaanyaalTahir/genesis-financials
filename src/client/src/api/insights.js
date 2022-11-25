import Axios from "axios";

export const getTopThreeCategories = async (values) => {
    const body = { ...values };
    try {
        const response = await Axios.post(
            "http://localhost:9000/insights/get_top_three_categories/",
            body
        );
        console.log(response);
        return response;
    } catch (err) {
        return false;
    }
};

export const getHighestTransaction = async (values) => {
    const body = { ...values };
    try {
        const response = await Axios.post(
            "http://localhost:9000/insights/highest_transaction/",
            body
        );
        console.log(response);
        return response;
    } catch (err) {
        return false;
    }
};

export const getMostTransactionsLocation = async (values) => {
    const body = { ...values };
    try {
        const response = await Axios.post(
            "http://localhost:9000/insights/most_transactions_location/",
            body
        );
        console.log(response);
        return response;
    } catch (err) {
        return false;
    }
};

export const getAvgMonthlySpent = async (values) => {
    const body = { ...values };
    try {
        const response = await Axios.post(
            "http://localhost:9000/insights/get_Avg_monthly_spent/",
            body
        );
        console.log(response);
        return response;
    } catch (err) {
        return false;
    }
};

export const getAvgYearlySpent = async (values) => {
    const body = { ...values };
    try {
        const response = await Axios.post(
            "http://localhost:9000/insights/get_Avg_yearly_spent/",
            body
        );
        console.log(response);
        return response;
    } catch (err) {
        return false;
    }
};
