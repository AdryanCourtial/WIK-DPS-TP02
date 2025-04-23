import { getEnv } from './env';
import { App } from './services';

// Ajout des variables d'environement
const hostname = getEnv<string>("SERVER_HOST");
const port = getEnv<number>("SERVER_PORT");

const serverUrl = `http://${hostname}:${port}`

// Construction de l'application
const app = new App(port, hostname)


// Route que vous voulez et qui été demandé
app.Get("/ping", (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(req.headers));
})

// Je sais pas j'avais envie x)
app.Get("/test", (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "test" }));
})

// Génaration du Server lorsque toutes les fonctions au dessus ont définies les routes
const server = app.GenerateServer()

// On Ecoute sur le Server Généré a l'instant
server.listen(port, hostname, () => {
  console.log(`Lancement du server sur le port : ${serverUrl}`);
});