'use strict';

module.exports = function(oApp) {
  let User = require('userModel.js)');

  oApp.get('/api/user', function (req, res) {
    User.find(function(err, users)) {
      if (err) {
        return res.status(500).send('Error occurred: database error');
      }

      res.json(users.map(function (user) {
        return {
          id: user.id,
          user_name: user.user_name,
          last_name: user.last_name,
          first_name: user.first_name
        };
      }));
    });
  });


  
}
