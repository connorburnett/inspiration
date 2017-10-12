var express = require('express')
var bodyParser = require('body-parser')
var dbConnect = require('./config/db/mlab-config')

var server = express()
var port = env.port

server.use(express.static('/public'))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended:true})) 

var todosRouter = require('./routes/todos')

server.use('/api/todos', todosRouter)

server.listen(port, () => {

	console.log(`
    Starting up node,
    Available on:
    http://127.0.0.1:${port}
    Hit CTRL-C to stop the server`)

})

var dbConnect = require("./config/db/mlab-config")