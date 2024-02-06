const express = require('express');
const router = express.Router();
const Log = require('../models/logs'); // Adjust the path as necessary

////////////////////////////////////////////
// Routes
////////////////////////////////////////////
router.get("/", (req, res) => {
    res.send("your server is running... better catch it.");
});
//Induces
//Index
router.get("/logs", (req, res) => {
    Log.find({})
    .then((allLogs) => {
        res.render('Index', { logs: allLogs})
    })
    .catch((err) => {
        console.error(err)
        res.status(400).json({ err })
    });
})
//New
router.get('/logs/new', (req, res) => {
    res.render('New');
  });
  
//Delete
router.delete('/logs/:id', (req, res) => {
    Log.deleteOne({ _id: req.params.id })
      .then((deleteInfo) => {
        console.log(deleteInfo)
        res.redirect('/logs'); // Redirect back to the index route after deletion
      })
      .catch(err => {
        console.error(err);
        res.status(400).json(err);
      });
  });
  
//Update
router.put('/logs/:id', (req, res) => {
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false;
    }
    Log.updateOne({ _id: req.params.id }, req.body)
        .then(updateInfo => {
            console.log(updateInfo);
            res.redirect(`/logs/${req.params.id}`);
        })
        .catch((err) => {
            console.error(err)
            res.status(400).json({ err })
        });
});
//Create
router.post('/logs', (req, res) => {
    // res.send('received')
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false;
    }
    Log.create(req.body)
        .then((createdLog) => {
            res.redirect(`/logs`)
        })
        .catch((err) => {
            console.error(err)
            res.status(400).json({ err })
        });
})
//Edit
router.get('/logs/:id/edit', (req, res) => {
    Log.findOne({ _id: req.params.id })
      .then(log => {
        res.render('Edit', { log }); // Pass the found log to the Edit component
      })
      .catch(err => {
        console.error(err);
        res.status(400).json({err});
      });
  });
//Show
router.get('/logs/:id', (req, res) => {
    Log.findOne({_id: req.params.id})
        .then((foundLog) => {
            res.render('Show', {log: foundLog})
        })
        .catch((err) => {
            console.error(err);
            res.status(400).json({ err });
        })
})

module.exports = router;