const userRoutes = require('express').Router();
const userController = require('../controller/userController')



userRoutes.route('/userRegisteration').post(userController.postUser);
userRoutes.route('/userRegisteration').get(userController.getUsers);
userRoutes.route('/userRegisteration/:id').get(userController.getUserbyId);
userRoutes.route('/userRegisteration/:id').put(userController.updateUser);
userRoutes.route('/userRegisteration/:id').delete(userController.deleteUser);



module.exports =  userRoutes;