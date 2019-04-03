const router = require('express').Router()
const manufacturersService = require('../services/manufacturersService')

router.get('/', async (req, res) => {
    const manufacturer = await manufacturersService.getManufacturers()
    res.json({ manufacturer: manufacturer })
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    const manufacturer = await manufacturersService.getManufacturersByID(parseInt(id))
    res.json({ manufacturer: manufacturer }) // manufacturer is the table name and manufacturers is variable
})

router.post('/', async (req, res) => {
    try {
        await manufacturersService.insert(req.body)
        res.json({ message: 'In manufacturer post' })
    }
    catch (err) {
        res.status(422).json({ message: err })
    }
})


module.exports = router