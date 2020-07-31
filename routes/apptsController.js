const express = require('express')
const router = express.Router({ mergeParams: true })
const { Appt } = require('../db/model')

//SHOW ALL
router.get('/', async (req, res) => {
    const appts = await Appt.find()
    res.send(appts)
})

//SHOW ONE
router.get('/:id', async (req, res) => {
    const appt = await Appt.findById(req.params.id)
    res.send(appt)
})

//UPDATE
router.put('/:id', async (req, res) => {
    const appt = await Appt.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.send(appt)
})

module.exports = router