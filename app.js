
require('./db')

//importing express and body-parser packages and assinging them to variables
const app = require('express')()
const bodyParser = require('body-parser')
//adding all controllers same as adding all components in app.component
// we are creating controllers to control the requests and responses in each moduleseparately
const productsController = require('./controllers/productsController')
const logisticsController = require('./controllers/logisticsController')
const dashboardController = require('./controllers/dashboardController')
const usersController = require('./controllers/usersController')
const authController = require('./controllers/authController')
const manufacturerController = require('./controllers/manufacturerController')

app.use(bodyParser.json()) // taking full express explication in app variable


// defining  route...  
app.get('/', (req, res) => {
    res.json({ message: 'Hello World' })
})

app.use('/users/', usersController)

app.use('/products/', productsController)

app.use('/logistics/', logisticsController)

app.use('/dashboard/', dashboardController)

app.use('/auth/login', authController)

app.use('/manufacturer/', manufacturerController)

module.exports = app