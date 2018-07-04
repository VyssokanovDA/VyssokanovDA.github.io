const db = require('../lib/db');
const Task = require('../model/task')

exports.get = async (req, res) => {
  try{
    const result = await Task.getUserTask(req.user.id);
    res.json({
      status: 'ok',
      data: result
    })
  }catch(err){
    res.sendStatus(500)
  }
};

exports.post = async (req, res) => {
  if(!req.body.task) return res.sendStatus(400);
  try{
    const result = await Task.addTask(req.body.task, req.user.id);
    res.send({
      status: 'ok',
      id: result
    })
  }catch(err){
    res.sendStatus(500)
  }
};

exports.put = async (req, res) => {
  const status = req.body.status;
  const task_id = req.params.id;
  if(status !== 0 && status !== 1) return res.sendStatus(400);
  try{
    await Task.changeStatus(req.user.id, task_id, status);
    res.sendStatus(200)
  }catch(err){
    res.sendStatus(500)
  }
};

exports.delete = async (req, res) => {
  const task_id = req.params.id;
  const user_id = req.user.id;
  try{
    await Task.deleteTask(user_id, task_id);
    res.sendStatus(200)
  }catch(err){
    res.sendStatus(500)
  }

};
