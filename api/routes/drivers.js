const express = require('express');
const router = express.Router();


//HAndling GET Request
router.get('/',(request,response, next)=>{

    response.status(200).json({
        message:'Retrieve driver details'
    });
});

//Handling POST request
router.post('/',(request,response, next)=>{
    const driver = {
        license: request.body.license,
        message:request.body.message,
        parkingCode:request.body.parkingCode
    }
    response.status(201).json({
        message:'Add driver details',
        Driver:driver
    });
});

//Handling POST request
router.delete('/:driverLicense',(request,response, next)=>{

    response.status(201).json({
        message: 'driver details removed',
        license: request.params.driverLicense
    });
});



module.exports = router;