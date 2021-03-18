const axios = require('axios');

const requestBody = {
  name: "John",
  age: 10,
};

axios.post("http://localhost:5000", requestBody)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
