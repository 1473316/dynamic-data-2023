//Setup our server
const http = require ('http');
//Define the port the app will be accessed from (80,8080,8888 are default to the domain/)
const port = process.env.PORT || 4000;

const server = http.createServer((request,response) => {
//Get the url
if((path == "") || (path == "/")) {
    response.writeHead(200 , { "Content-Type" : "Text/Plain "})
    response.end ("Home Page")
} else if (path == "/about") {
    response.writeHead(200 , { "Content-Type" : "Text/Plain "})
    response.end ("About Page")
} else if (path == "/contanct") {
    response.writeHead(200 , { "Content-Type" : "Text/Plain "})
    response.end ("<h1>Contact Us</h1>")
} else {
    response.writeHead(404 , { "Content-Type" : "Text/Plain "})
    response.end ("Not Found")
} 



    //response.writeHead(200 , { "Content-Type" : "Text/Plain "})
   // response.end ("Hello World")
}) 

//start the server
server.listen(port, () => console.log("server started on port " + port + " press ctrl + c to stop"))


