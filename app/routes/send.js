var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* POST home page. */
router.post('/', function (req, res, next) {

    var text = "<h2>Time: " + req.body.Time + " seconds</h2>";
    text += "<h2>Errors: " + req.body.ErrorCount + "</h2>";

    var transporter = nodemailer.createTransport({
        host: "send.one.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'wahoo@wahoo.one', // generated ethereal user
            pass: 'JamesBond=007', // generated ethereal password
        },
    });

    var mailOptions = {
        from: 'Wahoo@wahoo.one',     
        to: 'alex.kliachkov@gmail.com',
        subject: 'Multilearn Success Report',
        html: text
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            //console.log(error);
            res.send(error);
        } else {
            //console.log('Email sent: ' + info.response);
            res.send('Email sent: ' + info.response);
        }
    });

   
});

module.exports = router;
