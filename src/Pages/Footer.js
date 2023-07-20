import React from "react";
import '../Component/Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return <footer>{`Copyright © | Website made by me`}</footer>;
};

export default Footer;