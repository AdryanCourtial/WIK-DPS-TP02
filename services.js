"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const http_1 = __importDefault(require("http"));
class App {
    constructor(cport = 2000, chostname = "localhost") {
        this.arrayRouteServer = [];
        this.Get = (path, callback) => {
            this.arrayRouteServer.push({
                method: "GET",
                path: path,
                callback: callback
            });
            console.log("Route " + path + " Initialisé");
        };
        this.Post = (path, callback) => {
            this.arrayRouteServer.push({
                method: "POST",
                path: path,
                callback: callback
            });
            console.log("Route " + path + " Initialisé");
        };
        this.GenerateServer = () => {
            return http_1.default.createServer((req, res) => {
                const route = this.arrayRouteServer.find((value) => req.method === value.method && req.url === value.path);
                if (route) {
                    return route.callback(req, res);
                }
                res.writeHead(404);
                res.end();
            });
        };
        this.port = cport;
        this.hostname = chostname;
    }
}
exports.App = App;
