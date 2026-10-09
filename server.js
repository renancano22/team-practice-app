// Local development server. Run it with:  node server.js
// Then open http://localhost:3000 in your browser.
//
// Vercel does NOT use this file. On Vercel, the /public folder is served
// as the website and /api/hello.js runs as a serverless function.
// This file just copies that behavior on your own laptop.

const http = require("http");
const fs = require("fs");
const path = require("path");
const hello = require("./api/hello");

const PORT = 3000;
const PUBLIC_DIR = path.join(__dirname, "public");

const server = http.createServer((req, res) => {
  if (req.url.startsWith("/api/hello")) {
    return hello(req, res);
  }

  // Serve files from /public (index.html by default)
  const urlPath = req.url === "/" ? "/index.html" : req.url.split("?")[0];
  const filePath = path.join(PUBLIC_DIR, urlPath);

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.statusCode = 404;
      res.end("Not found");
      return;
    }
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end(content);
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
