//Node js API

const http = require("http");
http.createServer((req, resp) =>{
    resp.writeHead(200, {'Content-Type':'application\json'})
    resp.write(JSON.stringify({'name':'Pranali', 'age':'34'}))
    resp.end()
}).listen('5000')

