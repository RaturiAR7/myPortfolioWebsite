import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Map from "./Map";

const Section = styled.div`
  height: 100%;
  scroll-snap-align: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: 40px;
`;

const Title = styled.h1`
  font-weight: 200;
  font-size: 50px;
`;
const Form = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;
const TextArea = styled.textarea`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;
const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;
const Right = styled.div`
  flex: 1;
`;
const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_3pk0so8",
        "template_9tw2p2o",
        ref.current,
        "rPA7U_Dvm0Q-MG8C2"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <Section id='Contact'>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Us</Title>
            <Input placeholder='Name' name='name'></Input>

            <Input placeholder='Email' name='email'></Input>

            <TextArea
              placeholder='Write your message'
              name='message'
              rows={10}
            ></TextArea>
            <Button type='submit'>Send</Button>

            {success &&
              "Your message has been sent.We'll get back to you soon :)"}
          </Form>
        </Left>
        {window.innerWidth > 700 ? (
          <Right>
            <Map></Map>
          </Right>
        ) : (
          <div></div>
        )}
      </Container>
    </Section>
  );
};

export default Contact;
