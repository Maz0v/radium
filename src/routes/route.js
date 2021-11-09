const express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});
router.get('/movies', function (req, res) {
    res.send('["Fukrey","Delhi Belly","Dabang","Rockstar","Suryabangshi"]')
});
router.get('/movies/:movieId', function(req, res){ 
    //console.log(req)
    mov=["Fukrey","Delhi Belly","Dabang","Rockstar","Suryabangshi"]
    let value = req.params.movieId;
    if (value>mov.length-1){
        res.send('"dosent exist"')
        }else{
            res.send(mov[value])
        }
    
})

router.get('/moviez', function (req, res) {
    res.send([ {id: 1,name: 'The Shining' }, {id: 2,name: 'Incendies'},{id: 3,name: '3 idiots'},{id: 4,name: 'shersah'},{id: 5,name: 'don'}])
});

router.get('/films/:filmId', function (req, res) {
    let movi=[ {id: 1,name: 'The Shining' }, {id: 2,name: 'Incendies'},{id: 3,name: '3 idiots'},{id: 4,name: 'shersah'},{id: 5,name: 'don'}]
    let value = req.params.filmId;
    //console.log(typeof value)
    let found=false;
    for(i=0;i<movi.length;i++){
     //console.log(typeof movi[i].id)
        //console.log(movi[i])
        if( movi[i].id==value){
            found=true
            res.send(movi[i])
            break
       }

    }
    if(found==false){
        //console.log(found)
    res.send('‘No movie exists with this id’')}
    //console.log(found)
    // if(movi.id===value){
    //     res.send(movi[value-1]) }
    //     else if(movi.id!==value) { res.send('"No movie exists with this id"') }
    
});

module.exports = router;