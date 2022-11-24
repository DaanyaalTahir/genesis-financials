import Axios from "axios";

export const getStatement = async (values) => {
    const body = { ...values };
    try {
        const response = await Axios.post(
            "http://localhost:9000/statements/get_statementInfo/",
            body
        );
        console.log(response);
        return response;
    } catch (err) {
        return false;
    }
};