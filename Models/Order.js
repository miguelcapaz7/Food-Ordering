var mongoose         = require('mongoose');

var orderSchema    = mongoose.Schema({
        // The _id property serves as the primary key. If you don't include it
        // the it is added automatically. However, you can add it in if you
        // want to manually include it when creating an object.

        // _id property is created by default when data is inserted.
        dateTime:   {"type" : "String"},
        server:    {"type" : "String", required : true},
        price: {"type": Number, min: 0.01}
    }, 
    {collection : 'orders' },
    { versionKey : false }
    );
var Order    = mongoose.model('Order', orderSchema);
module.exports = Order;