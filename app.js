
//IMPORTS
const express =require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser'); // Used to parsed the body of incoming request.


app.use(morgan('dev'));//Helps with error handling logging

app.use(bodyParser.urlencoded({
      extended:false
}));

app.use(bodyParser.json());//Allows us to extract JSON encoded data and makes it easy to read


/**
 *  Allowing CORS (Cross Resouce Sharing)
 *  The asterice means allow  access to everyone
 */
app.use((request, response, next)=>{
    response.header('Access-Control-Allow-Origin','*');//Allowing CORS (Cross Resouce Sharing)
    response.header('Access-Control-Allow-Headers','*');

    //CHECK IF INCOMING REQUEST METHOD IS = OPTIONS
    if(request.method==="OPTIONS")
    {
        //TELLING THE API WHAT METHODS it's ALLOW TO SEND
        response.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET');
        return response.status(200).json({});
    }
    next();
});

//Routing Urls 
const parkingRoutes = require('./api/routes/parking');//Import parking route
const driverRoutes = require('./api/routes/drivers');//Import parking route



//Handling routes request
app.use('/parking',parkingRoutes);
app.use('/drivers',driverRoutes);



/**
 * Error Handling with MORGAN
 * This piece of code deals with invalid request 
 */
app.use((request, response, next)=>{
    const error = new Error('Not found');
    error.status(404);
    next(error);
});

app.use((error,request, response, next)=>{

    response.status(error.status || 500);
    response.json({
        error:{
            message: error.message
        }
    })
});
//End of Error Handling----------


module.exports = app;

