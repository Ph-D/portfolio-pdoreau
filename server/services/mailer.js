const nodemailer = require('nodemailer')
const sgTransport = require('nodemailer-sendgrid-transport')
const config = require('../config');

const transporter = nodemailer.createTransport(sgTransport({
  auth: {
    api_key: config.SENDGRID_API
  }
}))

const send = ({ email, name, text }) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`
  const message = {
    from,
    to: 'phildoreau45@gmail.com',
    subject: `New message from ${from}`,
    text,
    replyTo: from
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    )
  })
}

module.exports = send;
