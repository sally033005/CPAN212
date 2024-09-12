const http = require("http");
const fs = require("fs");
const path = require("path");
const PORT = process.env.PORT || 8000;
 
const server = http.createServer((req, res) => {

    if(req.url === "/" || req.url === "/home"){
        fs.readFile(path.join(__dirname, "pages", "home.html"), "utf8", (err, data) => {
            if (err) {
                res.writeHead(404, { "Content-Type": "text/plain" });
                res.write("Server Error");
                res.end();
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            res.end();
          });
    }
    else if(req.url === "/about"){
        fs.readFile(path.join(__dirname, "pages", "about.html"), "utf8", (err, data) => {
            if (err) {
                res.writeHead(404, { "Content-Type": "text/plain" });
                res.write("Server Error");
                res.end();
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            res.end();
          });
    }
    else if(req.url === "/contact"){
        fs.readFile(path.join(__dirname, "pages", "contact.html"), "utf8", (err, data) => {
            if (err) {
                res.writeHead(404, { "Content-Type": "text/plain" });
                res.write("Server Error");
                res.end();
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            res.end();
          });
    }
    else if (req.url === "/login"){
        if(req.method === "POST") {
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("GOT THE DATA");
        }
        fs.readFile(path.join(__dirname, "pages", "login.html"), "utf8", (err, data) => {
            if (err) {
                res.writeHead(404, { "Content-Type": "text/plain" });
                res.write("Server Error");
                res.end();
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            res.end();
    });
    } else {
        fs.readFile(path.join(__dirname, "pages", "404.html"), "utf8", (err, data) => {
            if (err) {
                res.writeHead(404, { "Content-Type": "text/plain" });
                res.write("Server Error");
                res.end();
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            res.end();
        });
    }
  });
 
 
  server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});