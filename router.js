var HomeController = require('./Controllers/HomeController');
var ProductController = require('./Controllers/ProductController');
var OrderController = require('./Controllers/OrderController');
const cors = require('cors');

// Routes
module.exports = function(app){  
    // Main Routes
    // Main Routes
    app.get('/',      HomeController.Index);
    app.get('/Product/Index', cors(), ProductController.Index);
    app.get('/Product/Detail', cors(), ProductController.Detail);
    app.get('/Product/Create', ProductController.Create); // *** Must remove.
    app.post('/Product/CreateProduct', cors(), ProductController.CreateProduct);
    app.get('/Product/Edit', ProductController.Edit);     // *** Must remove.
    app.put('/Product/Update', cors(), ProductController.Update);
    app.delete('/Product/Delete', cors(), ProductController.Delete);
    app.get('/Order/Index', cors(), OrderController.Index);
    app.get('/Order/Create', OrderController.Create); // *** Must remove.
    app.post('/Order/CreateOrder', cors(), OrderController.CreateOrder); 

};

