"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
http_1.default
    .createServer(function (req, res) {
    try {
        switch (req.url) {
            case '/ping':
                res.writeHead(200, req.rawHeaders);
                console.log(req.headers);
                res.end();
                break;
            default:
                res.writeHead(404);
                res.write('404 Not Found');
                res.end();
        }
    }
    catch (err) {
        res.writeHead(500);
        res.write('500' + err);
        res.end();
    }
})
    .listen((process.env.PING_LISTEN_PORT = '3000'), function () {
    console.log('Server start at http://localhost:' + process.env.PING_LISTEN_PORT);
});
//# sourceMappingURL=app.js.map