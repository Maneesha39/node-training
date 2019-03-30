const router = require('express').Router()

router.get('/', (req, res) => {
    console.log('Logistics');
    res.json({ message: 'Im in logistics' })
})
router.get('/:id', (req, res) => {
    const id = req.params.id
    console.log(`logistics id is ${id}`);
    res.json({ message: 'Logistics id is defined' })
})

router.get('/:id/products', (req, res) => {
    const id = req.params.id
    console.log(`logistics id is ${id}`);
    res.json({ message: 'Logistics/products id is defined' })
})

module.exports = router