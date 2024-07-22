const controllerBook = require('../controller/book/book.controller');
const controllerClient = require('../controller/client/client.controller');

const router = (app) => {
    app.use('/books', controllerBook);
    app.use('/clients', controllerClient);
}

module.exports = router;