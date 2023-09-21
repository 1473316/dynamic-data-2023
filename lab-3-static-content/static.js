//Setup our server
const http = require ('http');
//Define the port the app will be accessed from (80,8080,8888 are default to the domain/)
const fs = require('fs');
const port = process.env.PORT || 4000;

//fs.readFile(pathToFile, callBackFunction) //Callbacks are functions that get executed after another function has finished.


const displayPage =(path,res, contentType, responseCode = 200) => {
    fs.readFile(__dirname + path, (errors, content) => {
        
        if(errors){
            res.writeHead(500,{'Content-type': 'text/plain'})
            return res.end('500 - Internal Error')
        }
    
        res.writeHead(responseCode,{"Content-Type" : contentType})
        res.end(content)
        })
    }

const server = http.createServer((request,response) => {
//Get the url
const path = request.url

switch(path) {
    case '':
    case '/':
    displayPage('/public/home.html',response, "text/html")   
    break
    case '/about':
    displayPage('/public/about.html',response,"text/html")
    break
    case '/contact':
    displayPage('/public/contact.html',response, "text/html") 
    break
    case '/logo':
    displayPage('/public/img/logo.jpg',response, "image/jpg")  
    break 
    default:
    displayPage('/public/404.html',response, "text/html", 400)
    break
 }

}) 

//start the server
server.listen(port, () => console.log("server started on port " + port + " press ctrl + c to stop"))

