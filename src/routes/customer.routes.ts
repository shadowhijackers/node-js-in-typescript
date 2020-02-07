import express, { Request, Response } from 'express';

export class CustomerRoutes {
    
    public router = express.Router();

    constructor() {
    }
     
    public config(){
      this.getCustomers();
      return this.router;
    }

    private getCustomers(){

        this.router.get('/', (req: Request, res: Response)=>{
          console.log(req.url);
          res.status(200).send({
              customers: [ { name: 'Nagaraj'}]
          })
        });

    }

}

export default new CustomerRoutes().config();