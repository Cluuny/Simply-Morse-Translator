import http from "http";
import fs from "fs";

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/html");
  response.end(fs.readFileSync("../FrontEnd/index.html"));
});
const port = 8000;
server.listen(port, () => {
  console.log(`listen is: htpp://localhost:${port}`);
});
