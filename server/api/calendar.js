const router = require('express').Router();
const { Calendar } = require('../db');
//'start_date', 'end_date', 'start_time', 'end_time' add back to attributes

// GET /api/Calendar
router.get('/', async (req, res, next) => {
    try {
        const calendar = await Calendar.findAll({
            attributes: ['id', 'title',  'description' ]
        })
        console.log(calendar)
        res.json(calendar)
    } catch (err) {
        next(err);
    }
})

// GET /api/calendar/:eventId
router.get('/:eventId', async (req, res, next) => {
    try {
        const calendar = await Calendar.findByPk(req.params.eventId, {
            attributes: ['id', 'title',  'description']
        })
        console.log(calendar);
        res.json(calendar)
    } catch (err) {
        next(err)
    }
})

router.put('/:eventId', async (req, res, next) => {
  try {
    const calendar = await Calendar.findByPk(req.params.eventId)
    console.log(calendar, 'calendar')
    const updatedCalendar = await Calendar.update(req.body)
    res.send(updatedCalendar)
  } catch(err){
    next(err)
  }
});

//POST /api/Calendar
router.post("/", async (req, res, next) => {
  try {
    res.status(201).send(await Calendar.create(req.body));
  } catch (error) {
    next(error);
  }
});

// DELETE /api/Calendar/:id
router.delete("/:EventId", async (req, res, next) => {
  try {
    const calendar = await Calendar.findByPk(req.params.id);
    await calendar.destroy();
    res.send(calendar);
  } catch (error) {
    next(error);
  }
});

module.exports = router;