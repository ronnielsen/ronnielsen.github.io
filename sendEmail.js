nodemailer.createTransport({
  host: "smtp.example.com", //replace with your email provider
  port: 587,
  auth: {
    user: "username", //replace with the email address
    pass: "password" //replace with the password
  }
});

// verify connection configuration
transporter.verify(function(error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

router.post('/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var subject = req.body.subject
  var message = req.body.message
  var content = `name: ${name} \n email: ${email} \n subject: ${subject} \n message: ${message} `  var mail = {
    from: name,
    to: // receiver email,
    subject: subject,
    text: content
  }  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
})
