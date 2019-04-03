const router = require('express').Router();
const authService = require('../services/authService')

router.post('/', (req, res) => {
    try {
        const { username, password } = req.body
        authService.login(username, password)
        res.json({ token: 'auth login is defined' })
    }
    catch (err) {
        res.status(401).json({ message: err })
    }

})

module.exports = router