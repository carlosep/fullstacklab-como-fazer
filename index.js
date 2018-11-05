const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const categorias = require('./routes/categorias')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded())

const port = process.env.PORT || 3000

app.get('/', async (request, response) => {
    const content = await axios.get('https://como-fazer-262a0.firebaseio.com/Teste.json')
    console.log(content.data)
    response.render('index')
})

app.use('/categorias', categorias)

app.listen(port, (err) => {
    if (err) {
        console.log('error')
    } else {
        console.log('server running on port:', port)
    }
})