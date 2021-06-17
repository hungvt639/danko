import Client from "../UserClient";
const postData = (data) => {
    return Client().post("", data);
};

export default postData;
