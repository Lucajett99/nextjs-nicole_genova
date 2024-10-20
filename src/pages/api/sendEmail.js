const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.elasticemail.com",
  port: 2525,
  auth: {
    user: "lucagenova99@gmail.com",
    pass: "0A00E47CC62BA0B6C5FF327E53E5CC7F650A", // Inserisci la password fornita da Elastic Email
  },
});

const mailOptions = {
  from: "lucagenova99@gmail.com",
  to: "lucagenova99@gmail.com",
  subject: "Oggetto dell'email",
  text: "Contenuto del messaggio in testo semplice",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
} else {
    console.log("Email inviata: " + info.response);
  }
});
