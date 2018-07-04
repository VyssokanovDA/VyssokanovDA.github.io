const AuthController = require('./controller/AuthController');
const TaskController = require('./controller/TaskController');

module.exports = (app) => {
  app.post('/register', AuthController.register);
  app.post('/login', AuthController.login);
  app.get('/logout', AuthController.logout);
  app.get('/api/islogin', AuthController.testLogin);

  app.get('/api/tasks', AuthController.isLogin, TaskController.get);
  app.post('/api/tasks', AuthController.isLogin, TaskController.post);
  app.put('/api/tasks/:id', AuthController.isLogin, TaskController.put);
  app.delete('/api/tasks/:id', AuthController.isLogin, TaskController.delete);
};
