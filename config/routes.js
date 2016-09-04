var express = require('express'),
    app = express();
    router = express.Router(),
    bodyParser = require('body-parser')

var usersController = require('../controllers/users');

// User Routes

router.route('/users')

  .get(usersController.getAll)

  .post(usersController.createUser);


router.route('/users/:id')

  .get(usersController.getUser)

  .patch(usersController.updateUser)



module.exports = router
