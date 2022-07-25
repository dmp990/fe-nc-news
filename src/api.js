const axios = require("axios");

const baseURL = "https://asads-news-server.herokuapp.com/api";

export const fetchUsers = () => {
  return axios
    .get(baseURL + "/users")
    .then((response) => {
      return response.data.users;
    })
    .catch((err) => {
      return err;
    });
};

const testFn = async () => {
    const res = await fetchUsers();
    console.log(res);
}

