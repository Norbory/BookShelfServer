const controllerBook = require('../controller/book/book.controller');
const controllerClient = require('../controller/client/client.controller');
const controllerOrder = require('../controller/order/order.controller');

const router = (app) => {
    app.use('/books', controllerBook);
    app.use('/clients', controllerClient);
    app.use('/orders', controllerOrder);
}

module.exports = router;