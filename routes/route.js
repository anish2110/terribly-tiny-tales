const Router = require('express').Router;
const router = Router();

const axios = require('axios');

router.post('/check-result', (req, res, next) => {
    const rollNumbers  = req.body.rollNumbers;
    result(rollNumbers,res);
})    

function result(rollNumbers, res){
    const result = [];

    rollNumbers.forEach(element => {
        result.push(getResult(element))    
    });

    Promise.all(result)
    .then(response => {
        console.log('Line 24 -'+response);
        res.status(200).json({'result':response});
    })
    
}

function getResult(rollNumber){
    return new Promise(resolve => {
        axios.get(`https://terriblytinytales.com/testapi?rollnumber=${rollNumber}`)
        .then(result => {
            resolve(result.data);
        })
    })
}

module.exports = router;