const axios = require('axios');


// Request API.
axios
  .post('http://localhost:1337/auth/local', {
      identifier: 'sanjumoda049@gmail.com',
      password: '123456789'
  })
  .then(response => {
    // Handle success.
    console.log('Well done!');
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);

    // Request API.
    axios
      .get('http://localhost:1337/posts', {
        headers: {
          Authorization: `Bearer ${response.data.jwt}`
        }
      })
      .then(response => {
        // Handle success.
        console.log('=================================>Data: ', response.data);
      })
      .catch(error => {
        // Handle error.
        // console.log('An error occurred:', error);
      });


  })
  .catch(error => {
    // Handle error.
    // console.log('An error occurred:', error);
  });
