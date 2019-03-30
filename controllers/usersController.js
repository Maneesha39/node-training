const router = require('express').Router()
const usersService = require('../services/usersService')

router.get('/:id', (req, res) => {
    const id = req.params.id
    console.log(`user id is: ${id}`);
    res.json({ message: 'User id is defined' })
})

router.get('/', (req, res) => {
    const usersList = usersService.getUsers()
    res.json({ users: usersList })
})

// whatever we write in the body, it is pushed to server
router.post('/:id', (req, res) => {
    console.log(JSON.stringify(req.body, undefined, 4)); // JSON is datatype.. to get in propoer order we use undefined
    // console.log(req.body)
    res.json({ message: 'New user' })
})

module.exports = router