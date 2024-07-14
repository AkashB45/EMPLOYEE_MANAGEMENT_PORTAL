const userRoutes = require('express').Router();
const userController = require('../controller/userController')



userRoutes.route('/userRegisteration').get(userController.postUser);



module.exports =  userRoutes;