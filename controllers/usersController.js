const router = require('express').Router()
const usersService = require('../services/usersService')

router.get('/:id', async (req, res) => {
    const { id } = req.params
    const usersList = await usersService.getUsersByID(parseInt(id))
    res.json({ users: usersList })
})

router.get('/', async (req, res) => {
    const usersList = await usersService.getUsers()
    res.json({ users: usersList })
})

// whatever we write in the body, it is pushed to server
router.post('/', async (req, res) => {
    try {
        await usersService.insert(req.body)
        res.json({ message: 'In users post' })
    }
    catch (err) {
        res.status(422).json({ message: err })
    }
})

module.exports = router