import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import mailService from '../service/mailService';
interface FormData {
    name: string;
    email: string;
    message: string;
}
const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit =async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await mailService.sendMail(formData);

    if (response.status === 200) {
      setShowMessage(true);
      setMessage('Thank you for your message. I will get back to you as soon as possible.');
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } else {
        setShowMessage(true);
        setMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <Container className="my-5 mb-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="text-center text-white mb-4">Contact Me</h1>
         {showMessage && <p className="text-center text-info">{message}</p>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label className="text-white">Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label className="text-white">Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label className="text-white">Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                placeholder="Enter your message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <div className="text-center">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
