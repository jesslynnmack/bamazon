// Import Database Models
// =============================================================
const db = require('../models');

// Syncing our sequelize models 
// =============================================================
db.sequelize.sync().then(function () {
    db.Product.bulkCreate([{
        product_name: 'Head Phones',
        department_name: 'Apple',
        price: 20,
        stock_quantity: 30
    }, {
        product_name: 'Basket Ball',
        department_name: 'My Tennis Balls Corp',
        price: 8,
        stock_quantity: 30
    }, {
        product_name: 'Doggie Shark Costume',
        department_name: 'Doggo Halloween Inc.',
        price: 20,
        stock_quantity: 30
    }, {
        product_name: 'Sneakers',
        department_name: 'Nike',
        price: 50,
        stock_quantity: 30
    }, {
        product_name: 'Yoyo',
        department_name: '2000 Inc',
        price: 5,
        stock_quantity: 30
    }, {
        product_name: 'Walkman',
        department_name: '2000 Inc',
        price: 30,
        stock_quantity: 30
    }, {
        product_name: 'Mackbook Pro',
        department_name: 'Apple',
        price: 1200,
        stock_quantity: 30
    }, {
        product_name: 'iPhone',
        department_name: 'Apple',
        price: 900,
        stock_quantity: 30
    }, {
        product_name: 'Dog Collar',
        department_name: 'Doggos Inc',
        price: 10,
        stock_quantity: 30
    }, {
        product_name: 'Yoyo',
        department_name: '2000 Inc',
        price: 5,
        stock_quantity: 30
    },
    ]).then(function (data) {
        console.log('Data successfully added!');
    }).catch(function (error) {
        console.log('Error', error)
    });
});