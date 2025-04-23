import http from 'http';

interface DataRouteInterface {
   method: string
   callback: (req: http.IncomingMessage, res: http.ServerResponse) => void
   path: string
}

export class App {
    port: number
    hostname: string
    arrayRouteServer: DataRouteInterface[] = []

     constructor(
        cport: number = 2000,
        chostname: string = "localhost"
     ) {
        this.port = cport
        this.hostname = chostname
     }
     
      Get = (path: string, callback: (req: http.IncomingMessage, res: http.ServerResponse<http.IncomingMessage>) => void) => {

         this.arrayRouteServer.push({
            method: "GET",
            path: path,
            callback: callback
         })

         console.log("Route " + path + " Initialisé")

      }

      Post = (path: string, callback: (req: http.IncomingMessage, res: http.ServerResponse<http.IncomingMessage>) => void) => {

         this.arrayRouteServer.push({
            method: "POST",
            path: path,
            callback: callback
         })

         console.log("Route " + path + " Initialisé")

      }

     GenerateServer = (): http.Server<typeof http.IncomingMessage, typeof http.ServerResponse> => {
         return http.createServer((req, res) => {

            const route = this.arrayRouteServer.find(
               (value) => req.method === value.method && req.url === value.path
             )
       
             if (route) {
               return route.callback(req, res);
             }
       
             res.writeHead(404);
             res.end();
         
         });
     }
     
}