import * as express from 'express';
import * as mongoose from 'mongoose';
import { getEnvironmentVariable } from './environment/env';
import { UserRouter } from './routers/userRouter';




export class Server {
    public app: express.Application = express();

    constructor() {
        this.setConfigurations();
        this.setRoutes();
    }


    setMongoDb() {
        const databaseUrl = getEnvironmentVariable().db_url;
        mongoose.connect(databaseUrl,
            { useUnifiedTopology: true, useNewUrlParser: true })
            .then(() => {
                console.log("Db Connected Successfully!!");
            })

    }

    setConfigurations() {
        this.setMongoDb();
    }

    setRoutes(){
      this.app.use('/api/user', UserRouter);  
    }

    // userRoutes() {
    //    this.app.get('api/user/login', (req, res) => {
    //         const data = { firstname: "ganesh", lastname: "kumar" };
    //         res.status(200).send(data);

    //     });

    //     this.app.get('/api/user/signup', (req, res) =>{
    //         const data = [{name: 'testusername'}];
    //         res.status(200).send(data);
    //     });

    // }

}