import *  as express from 'express';
import * as mongoose from 'mongoose';
import { getEnvironmentVariable } from './environment/env';
let app : express.Application = express();



app.listen(5000, () => {
    console.log(`server is running on port 5000`)
});




mongoose.connect(getEnvironmentVariable().db_url, 
{ useUnifiedTopology: true, useNewUrlParser: true })
    .then(() =>{
        console.log("Db Connected Successfully!!");
    })



app.get('api/user/login', (req, res) =>{
    const data = { firstname: "ganesh", lastname: "kumar"};
    res.status(200).send(data);
    
})






