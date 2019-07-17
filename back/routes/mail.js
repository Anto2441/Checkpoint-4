const express = require('express');
const nodemailer = require('nodemailer');

const router = express.Router();

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    auth: {
      user: 'projet.wcs.js@gmail.com', // generated ethereal user
      pass: 'supersoupeur' // generated ethereal password
    }
  });

  transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Server is ready to take messages');
    }
  });


  router.post('/', (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;
    const content = `Nom & Prénom: ${name} \n Email: ${email} \n Message: ${message} `;

    const mail = {
      from: 'Droitaladeconnexion.fr',
      to: 'projet.wcs.js@gmail.com',
      subject,
      text: content,
      html: `<h1>Requête d'un visiteur</h1> <br> <b>Nom & Prénom : </b>${name} <br><br> <b>Email : </b>${email} <br><br> <b>Message : </b>${message}`,
    };

    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          msg: 'fail back'
        })
      } else {
        res.json({
          msg: 'success'
        });
      }
    });
  });
}

main().catch(console.error);

module.exports = router;
