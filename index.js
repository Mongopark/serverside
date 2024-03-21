const http = require("node:http");
const fs = require("node:fs");
const path = require("path");
const data = require("./datas.json");


const server = http.createServer((req, res) => { // Responding with HTML PAGE in the server
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        const name = "Mongopark";
        let html = fs.readFileSync(`${__dirname}/index.html`, "utf8");
        html = html.replace("{{name}}", name);
        res.end(html);
      } else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" }); // Responding with plain text in the server
        res.end(fs.readFileSync(`${__dirname}/about.html`, "utf8"));
      } else if (req.url === "/api") {
        res.writeHead(200, { "Content-Type": "application/json" }); // Responding with JSON format in the server
        res.end(
          JSON.stringify(data)
        );
      } else {
        res.writeHead(404);
        res.end("Page not found");
      }

});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));


