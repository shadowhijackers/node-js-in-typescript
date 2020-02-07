import express from 'express';
import * as bodyParser from 'body-parser';
import Routes from './routes';

export class App {

    public app: express.Application;
    public routes = new Routes();

    constructor(){
        this.app = express();
        this.routes.config(this.app);
        this.config();
    }

    private config(){
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
    
    }

}

export default new App().app;