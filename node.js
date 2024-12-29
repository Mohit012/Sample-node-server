const http = require('http');
const dotenv = require("dotenv");
dotenv.config();
const fs = require("fs");
const path = require("path");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    //static routing code 
    // if (req.url === '/') {
    //     fs.readFile(path.join(__dirname, "public", "index.html"), (err, data) => {
    //         if (err) {
    //             throw err;
    //         } else {
    //             res.writeHead(200, { "Content-Type": "text/html" });
    //             res.end(data);
    //         }
    //     });
    // } else if (req.url === "/about") {
    //     fs.readFile(path.join(__dirname, "public", "about.html"), (err, data) => {
    //         if (err) {
    //             throw err;
    //         } else {
    //             res.writeHead(200, { "Content-Type": "text/html" });
    //             res.end(data);
    //         }
    //     });
    // }
    // else if (req.url === "/contact") {
    //     fs.readFile(path.join(__dirname, "public", "contact.html"), (err, data) => {
    //         if (err) {
    //             throw err;
    //         } else {
    //             res.writeHead(200, { "Content-Type": "text/html" });
    //             res.end(data);
    //         }
    //     });
    // }

    // else if (req.url === "/plans") {
    //     fs.readFile(path.join(__dirname, "public", "plans.html"), (err, data) => {
    //         if (err) {
    //             throw err;
    //         } else {
    //             res.writeHead(200, { "Content-Type": "text/html" });
    //             res.end(data);
    //         }
    //     });
    // }
    
    // else {
    //     res.writeHead(404, { "Content-Type": "text/html" });
    //     res.end("<h1>404 - Page Not Found</h1>");
    // }

    //DYNAMIC ROUTING
    let filePath = path.join(
        __dirname,
        "public",
        req.url === "/" ? "index.html" : req.url + ".html"
    );
    fs.readFile(filePath, (err,data) => {
        if (err){
            res.end("<h1>404 - Page unavailable</h1>");
        } else {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(data);
        }
    });
});

server.listen(port, () => console.log(`Server is running on port ${port}`));
