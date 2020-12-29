const { static } = require("express");
const express = require("express");
const path = require("path");

const app = express();

//express
app.use(express.static(path.join(__dirname, "public")));

app.listen(5000);

// vanilla node.js for creating server
// http
//   .createServer(function (req, res) {
//     fs.readFile("./public/index.html", function (err, data) {
//       if (err) throw err;
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write(data);
//       res.end();
//     });
//   })
//   .listen(5000);
