const User = require('../model/user');
const bcrypt = require('bcrypt-nodejs');
const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser( async (id, done) => {
  try{
    const user = await User.findUserById(id);
    done(null, user);
  }catch(err){
    done(err, null)
  }
});


passport.use(new LocalStrategy({
    usernameField : 'email',
    passwordField : 'password'
  }, async (username, password, done) => {
    try{
      const user = await User.findUser(username);
      if(!user) return done(null, false, { message: 'Неверное имя' });
      const compare = bcrypt.compareSync(password, user.password);
      if(!compare) return done(null, false, { message: 'Неверный пароль' });
      return done(null, user)
    }catch(err){
      return done(err)
    }
  }
));

module.exports = null;