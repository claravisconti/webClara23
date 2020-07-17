var path = require('path');
const nodemailer = require('nodemailer');

const contactController = {
    index: (req, res) => {
        //
        res.render('contact');
    },
    sent: async (req, res) => {
        //console.log(req.body);
        const output = `
        <p>Tenes una nueva consulta</p>
        <h3>Detalles del contacto</h3>
        <ul>
        <li> Nombre: ${req.body.nombre} </li>
        <li> Empresa: ${req.body.empresa} </li>
        <li> Correo: ${req.body.email} </li>
        <li> Telefono: ${req.body.telefono} </li>
        <h3>Mensaje</h3>
        <p> ${req.body.mensaje} </p>
        </ul>
        `;

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.live.com", 
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'claravisconti@hotmail.com', // generated ethereal user
                pass: 'neco123456', // generated ethereal password
            },
            tls:{
                rejectUnauthorized:false
            }
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: '"Nodemailer Contact" <claravisconti@hotmail.com>', // sender address
            to: "claravisconti@hotmail.com, clara.0889@gmail.com", // list of receivers
            subject: "Contacto", // Subject line
            text: "Hello world?", // plain text body
            html: output, // html body
        });

        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
 
        res.render('contact', {
            mensaje: "Gracias por contactarme. Estaré respondiendo a la brevedad."
        });
    }

}

module.exports = contactController;