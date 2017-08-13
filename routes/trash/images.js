// var express = require('express')
// var router = express.Router()
// var mongoose = require('mongoose')


// var imageSchema = new mongoose.Schema({
//     title: {type: String, required: true},
//     currentPage: {type: Number, required: true, default: 0}
// })

// var Images = mongoose.model('Image', imageSchema)

// router.get('/', function(req, res, next) {
//     Images.find({})
//     .then((images)=>{
//       res.send(images)
//     })
//     .catch(next)
// })

// router.post('/', function(req, res, next) {
//     Images.create(req.body)
//     .then((image)=>{
//         res.send(image)
//     })
//     .catch(next)
// })

// router.get('/:imageId', function(req, res, next){
//   let imageId = req.params.imageId
//   Images.findById(imageId)
//   .then(image =>{
//     if(image){
//     res.send(image)
//     }else{
//       next({message: 'You are so cool! :)'})
//     }
//   })
//   .catch(next)
// })

// router.delete('/:imageId', (req, res, next) => {
//   var imageId = req.params.imageId
//   Images.findByIdAndRemove(imageId)
//   .then(image =>{
//     res.send({message: 'Successfully deleted.'})
//   })
//   .catch(next)
// })

// router.put('/:imageId', (req, res, next) =>{
//   var imageId = req.params.imageId
//   var updatedImageObj = req.body
//   Images.findByIdAndUpdate(imageId, updatedImageObj)
//   .then(image => {
//     res.send({message: 'Successfully Updated Image'})
//   })
//   .catch(next)
// })


// router.use(carsThreeIsTheBestMovie)

// function carsThreeIsTheBestMovie(err, req, res, next){
//   if (req.xhr){
//     res.json({success: false, error: err})
//   }else{
//     res.json({success: false, error: err.message})
//   }
// }

// module.exports = router