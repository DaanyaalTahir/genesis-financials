import Axios from "axios";

export const getContactInfo = async (values) => {
  const body = { ...values };
  try {
    const response = await Axios.post(
      "http://localhost:9000/contact/branch_contact_info/",
      body
    );
    return response;
  } catch (err) {
    return false;
  }
};
