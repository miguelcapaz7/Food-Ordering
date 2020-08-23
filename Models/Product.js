var mongoose         = require('mongoose');

var foodItemSchema    = mongoose.Schema({
        // The _id property serves as the primary key. If you don't include it
        // the it is added automatically. However, you can add it in if you
        // want to manually include it when creating an object.

        // _id property is created by default when data is inserted.
        _id:            {"type" : Number, min:0, max:1000000},
        productName:    {"type" : "String", required: true},
        price: {"type": Number, min: 0, max: 15000, required: true}
    }, 
    {collection : 'foodItems' },
    { versionKey : false }
    );
var FoodItem    = mongoose.model('FoodItem', foodItemSchema);
module.exports = FoodItem;
