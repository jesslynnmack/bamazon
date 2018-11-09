// Import in our db models
const db = require('../models');


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {

  // API Requests for /api/products
  // Below code controls what happens when a request is made to /api/products

  // GET Request
  // Responds with all the products
  app.get('/api/products', function (req, res) {
    db.Product.findAll({}).then(function (rows) {
      res.json(rows)
    }).catch(function (error) {
      res.json({ error: error });
    });
  });

  app.get('/api/products/:id', function (req, res) {
    db.Product.find({ where: { id: req.params.id } })
      .then(function (data) {
        res.json(data);
      }).catch(function (error) {
        res.json({ error: error });
      });
    console.log(req.params.id)
  });

  app.put('/api/products/:id', function (req, res) {
    db.Product.update(req.body, { where: { id: req.params.id } })
      .then(function (data) {
        res.json(data);
      }).catch(function (error) {
        res.json({ error: error });
      }); 
    console.log(req.params.id)
  });

};