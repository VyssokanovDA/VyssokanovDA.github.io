const db = require('../lib/db.js')

db.serialize(function() {
  db.run("CREATE TABLE user (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT UNIQUE, password TEXT)");
  db.run("CREATE TABLE task (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER, task TEXT, status INTEGER)");
});

db.close();