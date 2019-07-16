const { Router } = require('express');

const router = Router();

const connection = require('./conf');

/* GET index page. */
router.get('/', (req, res) => {
  res.json({
    title: 'Express'
  });
});

// Test récupération de tous les films
router.get('/api/artists', (req, res) => {
  connection.query('SELECT * FROM artist', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération de tous les artistes');
    } else {
      res.json(results);
    }
  });
});

module.exports = router;
