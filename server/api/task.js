const router = require('express').Router();
const { models: {Task} } = require('../db');

// GET /api/task - retrieve all Task items
router.get('/', async (req, res, next) => {
  try {
    const tasks = await Task.findAll({
      attributes: ['id', 'title', 'description', 'status']
    })
    res.json(tasks); // return an array of tasks
  } catch (error) {
    next(error);
  }
});

// GET /api/task/:id - retrieve a single Task item by its ID
router.get('/:id', async (req, res, next) => {
  try {
    const task = res.send(await Task.findByPk(req.params.id, {
      attributes: ['id', 'title', 'description', "status"]
    }));
    res.json(task)
  } catch (error) {
    next(error);
  }
});

// POST /api/task - create a new Task item
router.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await Task.create(req.body));
  } catch (error) {
    next(error);
  }
});

// PUT /api/task/:id - update an existing Task item by its ID
router.put('/:id', async (req, res, next) => {
  try {
    const task = await Task.findByPk(req.params.id)
    const { title, description, status } = req.body;
    const updatedTask = await task.update({ title, description, status });
    res.send(updatedTask);
  } catch (error) {
    next(error);
  }
});

// DELETE /api/task/:id - delete a Task item by its ID
router.delete('/:id', async (req, res, next) => {
  try {
    const task = await Task.findByPk(req.params.id);
    await task.destroy();
    res.send(task);
  } catch (error) {
    next(error);
  }
});

module.exports = router; // export the router module for use in the main app module
