const contact_mailer = require('../mailer/contact_mailer');

module.exports.index = async function (req, res){
    contact_mailer.newContact(req.body);
}