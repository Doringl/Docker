const axios = require('axios');

// Make a request for a user with a given ID
axios.get('http://localhost:80/api/hello')
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
