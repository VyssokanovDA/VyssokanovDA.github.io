const db = require('../lib/db');
const bcrypt = require('bcrypt-nodejs');
const passport = require('passport');
const User = require('../model/user');

exports.register = async (req, res) => {
  try{
    const salt = bcrypt.genSaltSync();
    const password = bcrypt.hashSync(req.body.password, salt);
    const email = req.body.email;

    const result = await User.createUser(email, password);
    if(result === 'SQLITE_CONSTRAINT')
      return res.send({
        status: 'error',
        message: 'Этот email уже используется'
      });

    const user = await User.findUser(email)

    req.logIn(user, function(err) {
      if (err) res.sendStatus(500);
      return res.status(200).send({status: 'ok'});
    });
  }catch(err){
    res.sendStatus(500)
  }
};

exports.login = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return res.sendStatus(500);
    if (!user) return res.status(200).send({status: 'error', message: info.message});
    req.logIn(user, function(err) {
      if (err) res.sendStatus(500);
      return res.status(200).send({status: 'ok'});
    });
  })(req, res, next);
};

exports.logout = (req, res) => {
  req.logout();
  res.status(200).send({status: 'ок'});
};

exports.isLogin = (req, res, next) => {
  return req.isAuthenticated() ? next() : res.sendStatus(401)
};

exports.testLogin = (req, res, next) => {
  return req.isAuthenticated() ? res.send({status: 'ok'}) : res.sendStatus(401)
};
