const express = require('express');
const router = express.Router();


//HAndling GET Request
router.get('/',(request,response, next)=>{

    response.status(200).json({
        message:'Handling GET request to /parking'
    });
});

//Handling POST request
router.post('/',(request,response, next)=>{

    const parkingSpace = {
        parkingCode: request.body.name,
        price: request.body.price
    }

    response.status(200).json({
        message:'Handling POST request to /parking',
        ParkingSpace: parkingSpace
    });
});


router.get('/:parkingCode', (request,response, next)=>{
    const code = request.params.parkingCode;
    if(code==='BA001'){
        response.status(200).json({
            message:'Parking area BA001 is $100 per hour',
            ParkingCode:code
        });
    }else{
        response.status(200).json({
            message:'wrong parking code!'
        });
    }
});


router.patch('/:parkingCode', (request,response, next)=>{
    
        response.status(200).json({
            message:'Updated Detail'
        });
});


router.delete('/:parkingCode', (request,response, next)=>{
    
    response.status(200).json({
        message:'Deleted parking area'
    });
});
module.exports = router;