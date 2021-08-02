import React from "react";
import {
  EmailOutlined,
  LaptopOutlined,
  PhotoCameraOutlined,
} from "@material-ui/icons";

const Contact = () => {
  return (
    <>
      <p>
        <EmailOutlined /> E-mail:{" "}
        <a href="brooks.jonathan1@gmail.com">brooks.jonathan1@gmail.com</a>
      </p>
      <p>
        <LaptopOutlined /> GitHub:{" "}
        <a href="https://github.com/blauks">blauks</a>
      </p>
      <p>
        <PhotoCameraOutlined /> Instagram:{" "}
        <a href="https://www.instagram.com/jonybrooks/">jonybrooks</a>
      </p>
    </>
  );
};

export default Contact;
