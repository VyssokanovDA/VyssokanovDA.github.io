const db = require('../lib/db');

exports.getUserTask = (user_id) => {
  return new Promise((resolve, reject) => {
    db.all('SELECT id, task, status FROM task WHERE user_id=$user_id ORDER BY id DESC', {$user_id: user_id}, function (err, row) {
      if(err) return reject(err);
      resolve(row);
    })
  })
};

exports.addTask = (task, user) => {
  return new Promise((resolve, reject) => {
    db.run("INSERT INTO task (user_id, task, status) VALUES ($user, $task, 0)",{
      $user: user,
      $task: task,
    }, function(err){
      if(err) return reject(err);
      resolve(this.lastID);
    })
  })
};

exports.changeStatus = (user_id, task_id, status) => {
  return new Promise((resolve, reject) => {
    db.run("UPDATE task SET status=$status WHERE id=$task_id, user_id=$user_id", {
      $status: status,
      $task_id: task_id,
      $user_id: user_id
    }, function(err){
      if(err) return reject(err);
      resolve();
    })
  })
};

exports.deleteTask = (user_id, task_id) => {
  return new Promise((resolve, reject) => {
    db.run("DELETE FROM task WHERE id=$task_id, user_id=$user_id", {
      $task_id: task_id,
      $user_id: user_id
    }, function(err){
      if(err) return reject(err);
      resolve();
    })
  })
};
