const express = require('express');
const router = express.Router();
const Place = require('../models/place');


//CREATE

router.post('/', async(req,res) => {

    const namae = req.body.name
    const et = ""
    async namae => {
        const et = Promise.resolve(Place.findOne(namae))
        console.log(et)
        return et
        }
    if (!req.body.name) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
      }

    const places = new Place({
        name: req.body.name,
        address: req.body.address,
        long: req.body.long,
        lat: req.body.lat
    })

    if (Promise.resolve(et).name != req.body.name){
    try {        
        const ww = await places.save()
        res.json(ww)
        
    } catch {
        res.send("Error")
        console.error();
    }}
});

//READ

router.get('/', async(req,res) => {
    try{
           const places = await Place.find()
           res.json(places)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:name', async(req,res) => {
    try{
           const places = await Place.find({ name: req.params.name })
           res.json(places)
    }catch(err){
        res.send('Error ' + err)
    }
})

//UPDATE

router.put('/', async(req,res)=> {
    try{
        const place= await Place.findOneAndReplace({
            name: req.body.name,
            address: req.body.address,
            long: req.body.long,
            lat: req.body.lat
    })
    }catch(err){
        res.send('Error')
    }

})

//DELETE
router.delete('/:id', async(req,res)=> {
    try{
        const place = await Place.findByIdAndDelete(req.params.id) 
        res.json(place)   
    }catch(err){
        res.send('Error')
    }

})





 module.exports = router

