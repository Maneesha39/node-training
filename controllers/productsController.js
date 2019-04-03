

// in router variable, we are taking only the routing part of complete application
const router = require('express').Router()
const productsService = require('../services/productsService')

router.get('/', async (req, res) => {
    const products = await productsService.getProducts()
    res.json({ products: products })
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    const products = await productsService.getProductsByID(parseInt(id))
    res.json({ products: products })
})
router.post('/:username/:manufacturerId', async (req, res) => {
    try {
        const { username, manufacturerId } = req.params
        await productsService.insert(username, parseInt(manufacturerId), req.body)
        // console.log(JSON.stringify(req.body, undefined, 4)); // JSON is datatype.. to get in propoer order we use undefined
        // console.log(req.body)
        res.json({ message: 'In products post' })
    }
    catch (err) {
        res.status(422).json({ message: err })
    }
})


module.exports = router
