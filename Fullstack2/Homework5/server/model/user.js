const db = require('../lib/db');

exports.findUser = (email) => {
  return new Promise((resolve, reject) => {
    db.get('SELECT * FROM user WHERE email=$email', {$email: email}, function (err, row) {
      if(err) return reject(err);
      resolve(row)
    })
  })
};

exports.findUserById = (id) => {
  return new Promise((resolve, reject) => {
    db.get('SELECT id, email FROM user WHERE id=$id', {$id: id}, function (err, row) {
      if(err) return reject(err);
      resolve(row)
    })
  })
};

exports.createUser = (email, password) => {
  return new Promise((resolve, reject) => {
    db.run("INSERT INTO user (email, password) VALUES ($email, $password)",{
      $email: email,
      $password: password,
    }, function(err){
        if(err){
          if(err.code === 'SQLITE_CONSTRAINT') return resolve(err.code);
          else return reject()
        }
        resolve();
    })
  })
};
