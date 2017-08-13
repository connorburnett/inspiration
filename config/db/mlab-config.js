var mongoose = require('mongoose')
var connection = mongoose.connection

mongoose.connect('mongodb://wilson:wilson@ds157980.mlab.com:57980/inspire-stuff', {
  server:{socketOptions:{keepAlive: 300000, connectTimeoutMS: 30000}},
  replset:{socketOptions:{keepAlive: 300000, connectTimeoutMS: 30000}},
})

connection.on('error', (err) =>{
  console.log('MLAB ERROR has occured. ', err)
})

connection.once('open', ()=>{
  console.log('Connected to MLAB.')
})