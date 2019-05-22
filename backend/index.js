const express = require('express');
const app = express();
const morgan=require('morgan');
const {connection}=require('./database');
//settings
app.set('port', process.env.PORT || 3000);


//middlewares
app.use(morgan('dev'));
app.use(express.json());
//startup
app.listen(app.get('port'), () => {
    console.log("servidor backend en ejecución. Puerto: "+app.get('port'));
});