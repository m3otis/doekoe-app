const express = require('express');
const app = express();
const entryRoutes = express.Router();

// Require entry model in our routes module
let entry = require('../models/entry');

// Defined store route
entryRoutes.route('/add').post(function(req, res) {
  console.log('inside');
  console.log(req.body);
  let savingEntry = new entry(req.body);
  console.log(savingEntry);

  savingEntry
    .save()
    .then(entry => {
      res.status(200).json({ entry: `💸 $${entry.amount} for ${entry.name} ${entry.description} added successfully` });
    })
    .catch(err => {
      res.status(400).send('unable to save to database');
    });
});

// Defined get data(index or listing) route
entryRoutes.route('/').get(function(req, res) {
  entry.find(function(err, entries) {
    if (err) {
      console.log(err);
    } else {
      res.json(entries);
    }
  });
});

// Defined edit route
entryRoutes.route('/edit/:id').get(function(req, res) {
  let id = req.params.id;
  entry.findById(id, function(err, entry) {
    res.json(entry);
  });
});

//  Defined update route
entryRoutes.route('/update/:id').post(function(req, res) {
  entry.findById(req.params.id, function(err, next, entry) {
    if (!entry) return next(new Error('Could not load Document'));
    else {
      entry.name = req.body.person_name;
      entry.description = req.body.description;
      entry.amount = req.body.amount;

      entry
        .save()
        .then(entry => {
          res.json('Update complete');
        })
        .catch(err => {
          res.status(400).send('unable to update the database');
        });
    }
  });
});

// Defined delete | remove | destroy route
entryRoutes.route('/delete/:id').get(function(req, res) {
  entry.findByIdAndRemove({ _id: req.params.id }, function(err, entry) {
    if (err) res.json(err);
    else res.json('Successfully removed');
  });
});

module.exports = entryRoutes;
