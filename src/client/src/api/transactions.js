import Axios from "axios";

export const getLastTransaction = async (values) => {
  const body = { ...values };
  try {
    const response = await Axios.post(
      "http://localhost:9000/transactions/get_last_transaction/",
      body
    );
    console.log(response);
    return response;
  } catch (err) {
    return false;
  }
};

export const getCurrentMonthCategorySpending = async (values) => {
  const body = { ...values };
  try {
    const response = await Axios.post(
      "http://localhost:9000/transactions/cur_month_category_spending/",
      body
    );
    console.log(response);
    return response;
  } catch (err) {
    return false;
  }
};

export const getPastTwelveMonthSpending = async (values) => {
  const body = { ...values };
  try {
    const response = await Axios.post(
      "http://localhost:9000/transactions/spending_past_twelve_months/",
      body
    );
    console.log(response);
    return response;
  } catch (err) {
    return false;
  }
};
