import Axios from "axios";

export const onLogin = async (values) => {
  const body = { ...values };
  try {
    const response = await Axios.post(
      "http://localhost:9000/users/login/",
      body
    );
    console.log(response);
    return response;
  } catch (err) {
    return false;
  }
};

export const onRegister = async (values) => {
  const body = { ...values };
  try {
    const response = await Axios.post(
      "http://localhost:9000/users/register/",
      body
    );
    console.log(response);
    return response;
  } catch (err) {
    return false;
  }
};

export const etransfer = async (values) => {
  const body = { ...values };
  try {
    const response = await Axios.post(
      "http://localhost:9000/users/etransfer/",
      body
    );
    console.log(response);
    return response;
  } catch (err) {
    return false;
  }
};

export const getBalance = async (values) => {
  const body = { ...values };
  try {
    const response = await Axios.post(
      "http://localhost:9000/users/account_balance",
      body
    );
    return response;
  } catch (err) {
    return false;
  }
};

export const contact = async (values) => {
  const body = { ...values };
  try {
    const response = await Axios.post(
      "http://localhost:9000/users/contact/",
      body
    );
    console.log(response);
    return response;
  } catch (err) {
    return false;
  }
};
