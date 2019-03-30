// in router variable, we are taking only the routing part of complete application
const router = require('express').Router()
const productsService = require('../services/productsService')

router.get('/', (req, res) => {
    const products = productsService.getProducts()
    res.json({ products: products })
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    console.log(`product is ${id}`);
    res.json({ message: 'Product id is defined' })
})
router.post('/', (req, res) => {
    console.log(JSON.stringify(req.body, undefined, 4)); // JSON is datatype.. to get in propoer order we use undefined
    // console.log(req.body)
    res.json({ message: 'Products page' })
})


module.exports = router
