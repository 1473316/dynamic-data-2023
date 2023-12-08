const express = require('express')

//add the view engine 
const expressHandlebars = require('express-handlebars') 

const app = express()

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true}))

const handler = require('./lib/handler')

//configure our express app to use handlebars
app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main',
}))

app.set('view engine','handlebars')
//ends handlebar configuration

app.use(express.static(__dirname + "/public"))

const port = process.env.port || 3000

const emails = []





//app.get('/',(req,res)=>{
   // res.render('page',{req})
//})

app.get('/',(req,res)=>{
    var data = require('./data/home-data.json')
    res.render('page',{data})
})

app.get('/about',(req,res)=>{
    var data = require('./data/about.json')
    res.render('page',{data})
})

//newsletter section
//https://elements.envato.com/web-templates/shopping+html

app.get('/check-out', handler.checkOut)

app.post('/check-out/process', handler.checkOutProcess)

app.get('/product/:id',handler.showProduct)

app.get('/category/:category',handler.showCategory)

app.post('/cart', handler.addToCartProcess)

app.get('/thankyou',(req,res) =>{
    res.render('thankyou')
})
//Error handling ->  app.use() basic express route 
app.use((req,res) => {
    res.status(404)
    res.render('404')
})

//Server Error 500
app.use((error,req,res,next) => {
    console.log(error.message)
    res.status(500)
    res.render('500') 
}) 


// setup listener
app.listen(port,()=>{
    console.log(`Server started http://localhost:${port}`)
    //console.log('Server starter http://localhost:'+port)
    console.log('To close pres Ctrl-C')
})