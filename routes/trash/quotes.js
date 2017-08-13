// var express = require('express')
// var router = express.Router()
// var mongoose = require('mongoose')


// var quoteSchema = new mongoose.Schema({
//     title: {type: String, required: true},
//     currentPage: {type: Number, required: true, default: 0}
// })

// var Quotes = mongoose.model('Quote', quoteSchema)

// router.get('/', function(req, res, next) {
//     Quotes.find({})
//     .then((quotes)=>{
//       res.send(quotes)
//     })
//     .catch(next)
// })

// router.post('/', function(req, res, next) {
//     Quotes.create(req.body)
//     .then((quote)=>{
//         res.send(quote)
//     })
//     .catch(next)
// })

// router.get('/:quoteId', function(req, res, next){
//   let quoteId = req.params.quoteId
//   Quotes.findById(quoteId)
//   .then(quote =>{
//     if(quote){
//     res.send(quote)
//     }else{
//       next({message: 'You are great!'})
//     }
//   })
//   .catch(next)
// })

// router.delete('/:quoteId', (req, res, next) => {
//   var quoteId = req.params.quoteId
//   Quotes.findByIdAndRemove(quoteId)
//   .then(quote =>{
//     res.send({message: 'Successfully deleted.'})
//   })
//   .catch(next)
// })

// router.put('/:quoteId', (req, res, next) =>{
//   var quoteId = req.params.quoteId
//   var updatedQuoteObj = req.body
//   Quotes.findByIdAndUpdate(quoteId, updatedQuoteObj)
//   .then(quote => {
//     res.send({message: 'Successfully Updated Quote'})
//   })
//   .catch(next)
// })


// router.use(errorErrorThereAreLotsOfErrorsThatMustBeDealtWithImmeeeeeediateleyyyyy)

// function errorErrorThereAreLotsOfErrorsThatMustBeDealtWithImmeeeeeediateleyyyyy(err, req, res, next){
//   if (req.xhr){
//     res.json({success: false, error: err})
//   }else{
//     res.json({success: false, error: err.message})
//   }
// }

// module.exports = router