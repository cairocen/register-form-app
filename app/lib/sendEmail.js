import emailjs from 'emailjs-com';

const sendEmail = (correoDestino) => {
  const templateParams = {
    to_email: correoDestino
  };

  emailjs.send('service_gn0ljca', 'template_vpd9i29', templateParams, 'Kpfj3zMSK3qwy9mwn')
    .then((response) => {
      console.log('Correo enviado con éxito!', response);
    }, (error) => {
      console.error('Hubo un error al enviar el correo:', error);
    });
};

export default sendEmail;