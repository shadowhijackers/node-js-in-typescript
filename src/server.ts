import http from 'http';
import  socketIO from 'socket.io';

import  app from './app';

export class AppServer{
    
    public static  PORT = 3000;
    constructor(){
    }

    public static start(){

        const server = http.createServer(app);
        this.listenSocketServer(server);
        server.listen(this.PORT, ()=>{
            console.log('Express server listening on port ' + this.PORT)
        });

    }

    private static listenSocketServer(server: any){
        
        const io = socketIO(server);

        io.on('connection', function(socket){
            console.log('a user connected', socket);
          });
          
    }

}

AppServer.start();