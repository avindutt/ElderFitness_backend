const nodemailer = require('../config/Nodemailer');

exports.newContact = (body) => {

    nodemailer.transporter.sendMail({
        from: 'avindutt2369@gmail.com',
        to: body.email,
        subject: "Welcome to ElderFitness Family",
        html: '<h1>Your contact is added. Our team will soon connect with you.</h1> <p> You are our valuable customer.</p>'
    }, (err, info) => {
        if(err){console.log('Error in sending mail', err); return}
        console.log('Message sent', info);
        return;
    });
};