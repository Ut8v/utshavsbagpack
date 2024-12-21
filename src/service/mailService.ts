import emailjs from 'emailjs-com';
const serviceID = import.meta.env.VITE_SERVICE_ID;
const templateID = import.meta.env.VITE_TEMPLATE_ID;
const userID = import.meta.env.VITE_USER_ID;

class mailService {
  static async sendMail(formData: { name: string; email: string; message: string; }) {
    const response = await emailjs.send(
        serviceID, 
        templateID, 
        formData,
        userID 
      )
        return response;
    }
}

export default mailService;