import Axios from "axios";

export const getCustAcctsAndCards = async (values) => {
  const body = { ...values };
  try {
    const response = await Axios.post(
      "http://localhost:9000/accounts/get_cust_accts_cards/",
      body
    );
    console.log(response);
    return response;
  } catch (err) {
    return false;
  }
};
