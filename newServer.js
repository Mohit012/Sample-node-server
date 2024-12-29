// //import modules required to build a server
// const fs = require("fs");
// const http = require("http");
// const path = require("path");
// const dotenv = require("dotenv");
// dotenv.config();
// //let's create a server
// const PORT = process.env.PORT || 5000;

// const server = http.createServer((req,res) => {
//     const products = [
//         {
//             id: 1,
//             name: "laptop",
//             price: 50000,
//         },
//         {
//             id: 2,
//             name: "mobile",
//             price: 10000,
//         },
//     ];
//     if(req.url === "/api/products"){
//         res.writeHead(200, {"content-type": "application/json"});
//         res.end(JSON.stringify( products));
//     }
//     else{
//         fs.readFile(path.join(__dirname,"public","index.html"), (err,data) => {
//             if(err){
//                 res.writeHead(500, {"content-type":"text/html"});
//                 res.end("<h1>Internal server error</h1>");
//             } else {
//                 res.writeHead(200, {"content-type" : "text/html"});
//                 res.end(data);
//             }

//         });
//     }
// });

// server.listen(PORT, () =>{
//     console.log(`server is running on port, ${PORT}`);
// });