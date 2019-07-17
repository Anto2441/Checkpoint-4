const express = require('express');
const connection = require('./conf');

const router = express.Router();

// GET all
router.get('/', (req, res) => {
  connection.query('SELECT * FROM event', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération de tous les événements');
    } else {
      res.json(results);
    }
  });
});

/* GET by id */
router.get('/:id', (request, response) => {
  const idEvent = request.params.id;
  connection.query('SELECT * FROM event WHERE id = ?', [idEvent], (error, results) => {
    if (error) {
      response.sendStatus(500);
    } else {
      response.json(results[0]);
    }
  });
});

/* POST */
router.post('/', (request, response) => {
  const formData = request.body;
  connection.query('INSERT INTO event SET ?', formData, (error, results) => {
    if (error) {
      response.sendStatus(500);
    } else {
      response.sendStatus(201);
    }
  });
});

/* DELETE by id. */
router.delete('/:id', (request, response) => {
  const idEvent = request.params.id;
  connection.query('DELETE FROM event WHERE id = ?', [idEvent], (error, results) => {
    if (error) {
      response.sendStatus(500);
    } else {
      response.sendStatus(200);
    }
  });
});

/* UPDATE event */
router.put('/:id', (request, response) => {
  const idEvent = request.params.id;
  const requestBody = request.body;
  connection.query('UPDATE event SET ? WHERE id = ?', [requestBody, idEvent], (error, results) => {
    if (error) {
      response.sendStatus(500);
    } else {
      response.sendStatus(200);
    }
  });
});

module.exports = router;
