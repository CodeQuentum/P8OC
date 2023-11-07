const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();
const sgMail = require ('@sendgrid/mail');
sgMail.setApiKey(process.env.SEND_GRID);

const emailUser = process.env.EMAIL_USER;
const sendHere = process.env.EMAIL_TO_SEND;

exports.envoyerCourriel = (req, res) => {
  const { name, email, message } = req.body;

  const msg = {
    to: sendHere, 
    from: emailUser, 
    subject: 'Nouveau message du formulaire de contact',
    text: `Nom : ${name}\nEmail : ${email}\nMessage : ${message}`,
  };

  sgMail.send(msg)
    .then(() => {
      console.log('E-mail envoyé avec succès.');
      res.status(200).send('E-mail envoyé avec succès.');
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Une erreur s'est produite lors de l'envoi de l'e-mail.");
    });
};