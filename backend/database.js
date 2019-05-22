const mongoose=require('mongoose');
const URI='mongodb://localhost/raffleDb';
mongoose.connect(URI,{ useNewUrlParser: true }).then(db=>{
    console.log('DB is connected');

}).catch(err=>{
    console.error(err);
});
module.exports=mongoose;