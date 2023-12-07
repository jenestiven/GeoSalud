const express = require('express');
const { exec } = require('child_process');
const app = express();
const path = require('path');

app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'..','/views'));

app.use(express.static(path.join(__dirname,'..','/public')));

const rutas = require('./routes');
app.use(rutas);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).render('error', { error: 'Ocurrió un error en el servidor' });
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
  console.log('La aplicación está lista para ser utilizada.');

  // Abrir el navegador en la URL correspondiente
  const url = `http://localhost:${port}`;
  switch (process.platform) {
    case 'darwin': // macOS
      exec(`open ${url}`);
      break;
    case 'win32': // Windows
      exec(`start ${url}`);
      break;
    default: // Linux o cualquier otro sistema operativo
      exec(`xdg-open ${url}`);
      break;
  }
});

process.on('SIGINT', () => {
  server.close();
  console.log('Servidor detenido');
  process.exit();
});
