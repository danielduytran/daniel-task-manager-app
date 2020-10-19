const { send } = require('@sendgrid/mail');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'daniel@consistentdeveloper.com',
        subject: 'Thank you for joining in!',
        text: `This will the start of a wonderful journey ${name}. Please let me know how we could get along.`
    });
};

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'daniel@consistentdeveloper.com',
        subject: 'What is wrong? We are sorry for bad experiences!',
        text: `Please let me know what happened ${name} and what we can do to improve.`
    });
};

module.exports = { sendWelcomeEmail, sendCancellationEmail };

