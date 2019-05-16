const express = require('express');
const app = express();
//settings
app.set('port', process.env.PORT || 3000);

//middlewares

//startup
app.listen(app.get('port'), () => {
    console.log("servidor backend en ejecución. Puerto: "+app.get('port'));
});