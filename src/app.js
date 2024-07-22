const { port } = require('./config');
const app = require('./index');

app.listen(port, () => {
  console.log(`El servidor está corriendo en el puerto ${port}`);
});

