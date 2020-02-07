import express from 'express';
import {Request, Response} from 'express';

import customerRoutes from './customer.routes';


export class Routes {
    
    public app: any;
    
    constructor(){
    }
    
    public config(app: express.Application){
      this.app = app;
      this.baseRoute();
      this.customerRoutes();
    }

    private baseRoute(){
        this.app.route('/').get((req: Request, res: Response) => {
            console.log(req.url);
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            });
        });
    }

    private customerRoutes(){
      this.app.use('/customers', customerRoutes);
    }
}

export default Routes;