const http = require("http");

// Datos de persona
const persona = require("./persona.js");
console.log(persona);

const server = http.createServer((req, res) => {
  // JSON.stringify pasa a string el objeto, no se porque ayer no funciono
  res.end(JSON.stringify(persona));
});

server.listen(8000, () => {
  console.log("Servidor escuchando en http://localhost:8000");
});
