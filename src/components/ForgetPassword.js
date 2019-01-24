const axios = require('axios');

// Request API.
axios
  .post('http://localhost:1337/auth/forgot-password', {
    email: 'dev.koold@gmail.com',
    url: 'http:/localhost:1337/admin/plugins/users-permissions/auth/reset-password'
  })
  .then(response => {
    // Handle success.
    console.log('Your user received an email');
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error);
  });
