const {Client} = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'gdbrpss.coxohzzfryhi.us-east-1.rds.amazonaws.com',
    database: 'proyfinsig3',
    password: 'dossac11',
    port: 5432,
});

client.connect()
  .then(() => {
    console.log('Conexión exitosa a PostgreSQL');
    // Aquí puedes realizar tus consultas y operaciones con la base de datos
  })
  .catch(err => console.error('Error al conectar a PostgreSQL', err));

client.query('SELECT * FROM eps')
  .then(result => {
    console.log(result.rows); // Aquí estarán los datos de la consulta
  })
  .catch(err => console.error('Error al ejecutar la consulta', err))
  .finally(() => {
    // No te olvides de cerrar la conexión cuando hayas terminado
    client.end();
  });

