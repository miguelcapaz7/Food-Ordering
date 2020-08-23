const OrderRepo   = require('../Data/OrderRepo');
const _orderRepo  = new OrderRepo();
const Order       = require('../Models/Order');

// This is the default page for domain.com/product/index.
// It shows a listing of products if any exist.
exports.Index = async function(request, response){
    let orders = await _orderRepo.allOrders();
    if(orders!= null) {
        response.json({ orders:orders })
    }
    else {
        response.json( { orders:[] })
    }
};


// GET request calls here to display 'Product' create form.
exports.Create = async function(request, response) {
    response.json( { errorMessage:"", orders:{} });
};

// Receives POST data and tries to save it.
exports.CreateOrder = async function(request, response) {

    // Package object up nicely using content from 'body'
    // of the POST request.
    let tempOrderObj  = new Order( {
        "dateTime": request.body.dateTime,
        "server":    request.body.server,
        "price": request.body.price,
    });

    // Call Repo to save 'Product' object.
    let responseObject = await _orderRepo.create(tempOrderObj);

    // No errors so save is successful.
    if(responseObject.errorMessage == "") {
        console.log('Saved without errors.');
        console.log(JSON.stringify(responseObject.obj));
        response.json({ order:responseObject.obj,
                                            errorMessage:""});
    }
    // There are errors. Show form the again with an error message.
    else {
        console.log("An error occured. Item not created.");
        response.json( {
                        order:responseObject.obj,
                        errorMessage:responseObject.errorMessage});
    }
};
