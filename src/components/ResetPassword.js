const axios = require('axios');

// Request API.
axios
  .post('http://localhost:1337/auth/reset-password', {
    code: 'privateCode',
    password: 'myNewPassword',
    passwordConfirmation: 'myNewPassword'
  })
  .then(response => {
    // Handle success.
    console.log('Your user\'s password has been changed.');
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error);
  });
