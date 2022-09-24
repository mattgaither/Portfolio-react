import React, {useRef} from "react";
import emailjs from "@emailjs/browser";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import Swal from 'sweetalert2';
import USER_ID from "../key";

import '../../App.css'

const SERVICE_ID = "service_4l8mb8e";
const TEMPLATE_ID = "template_uvp92a3";


const ContactForm = (e) => {
  const form = useRef();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        e.target,
        USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Message Sent Successfully",
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Ooops, something went wrong",
            text: error.text,
          });
        }
      );
    e.target.reset();
  };

  return (
    <div className="ContactForm">
      <Form onSubmit={handleOnSubmit} ref={form}>
      <Form.Field
          id="form-input-control-subject"
          control={Input}
          label="Subject"
          name="user_subjuct"
          placeholder="Subject…"
          required
          icon="mail"
          iconposition="left"
        />
        <Form.Field
          id="form-input-control-email"
          control={Input}
          label="Email"
          name="user_email"
          placeholder="Email…"
          required
          icon="mail"
          iconposition="left"
        />
        <Form.Field
          id="form-input-control-last-name"
          control={Input}
          label="Name"
          name="user_name"
          placeholder="Name…"
          required
          icon="user circle"
          iconposition="left"
        />
        <Form.Field
          id="form-textarea-control-opinion"
          control={TextArea}
          label="Message"
          name="user_message"
          placeholder="Message…"
          required
        />
        <Button type="submit" color="green">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
