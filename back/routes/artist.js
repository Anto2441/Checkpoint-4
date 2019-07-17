const express = require('express');
const connection = require('./conf');

const router = express.Router();

// GET all
router.get('/', (request, response) => {
  connection.query('SELECT * FROM artist', (err, results) => {
    if (err) {
      response.status(500).send('Erreur lors de la récupération de tous les artistes');
    } else {
      response.json(results);
    }
  });
});

/* GET by id */
router.get('/:id', (request, response) => {
  const idArtist = request.params.id;
  connection.query('SELECT * FROM artist WHERE id = ?', [idArtist], (error, results) => {
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
  connection.query('INSERT INTO artist SET ?', formData, (error, results) => {
    if (error) {
      response.sendStatus(500);
    } else {
      response.sendStatus(201);
    }
  });
});

/* DELETE by id. */
router.delete('/:id', (request, response) => {
  const idArtist = request.params.id;
  connection.query('DELETE FROM artist WHERE id = ?', [idArtist], (error, results) => {
    if (error) {
      response.sendStatus(500);
    } else {
      response.sendStatus(200);
    }
  });
});

/* UPDATE artiste */
router.put('/:id', (request, response) => {
  const idArtist = request.params.id;
  const requestBody = request.body;
  connection.query('UPDATE artist SET ? WHERE id = ?', [requestBody, idArtist], (error, results) => {
    if (error) {
      response.sendStatus(500);
    } else {
      response.sendStatus(200);
    }
  });
});


module.exports = router;
