const router = require('express').Router()

router.get('/', (req, res) => {
    console.log('Dashboard');
    res.json({ message: 'Im in dashboard' })
})


module.exports = router
