const router = require('express').Router();
const { models: {Note} } = require('../db');

// GET /api/note - retrieve all Note items
router.get('/', async (req, res, next) => {
  try {
    const notes = await Note.findAll({
      attributes: ['id', 'title', 'content']
    })
    res.json(notes); 
  } catch (error) {
    next(error);
  }
});

// GET /api/note/:id - retrieve a single Note item by its ID
router.get('/:id', async (req, res, next) => {
  try {
    const note = res.send(await Note.findByPk(req.params.id, {
      attributes: ['id', 'title', 'content']
    }));
    res.json(note);
  } catch (error) {
    next(error);
  }
});

// POST /api/note - create a new Note item
router.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await Note.create(req.body));
  } catch (error) {
    next(error);
  }
});

// PUT /api/note/:id - update an existing Note item by its ID
router.put('/:id', async (req, res, next) => {
  try {
    const note = await Note.findByPk(req.params.id)
    const { title, content } = req.body;
    const updatedNote = await note.update({ title, content });
    res.send(updatedNote);
  } catch (error) {
    next(error);
  }
});

// DELETE /api/notes/:id - delete a Note item by its ID
router.delete('/:id', async (req, res, next) => {
  try {
    const note = await Note.findByPk(req.params.id); 
    await note.destroy(); 
    res.send(note); 
  } catch (error) {
    next(error); 
  }
});

module.exports = router; // export the router module for use in the main app module