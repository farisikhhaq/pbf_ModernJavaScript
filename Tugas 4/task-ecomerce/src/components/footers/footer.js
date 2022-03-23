import React from "react";
import { useAuth } from "../../context/useAuth";

const Footer = () => {
  const {token} = useAuth()
  return (
    <footer className="text-center mt-5">
      {token && (
        <p className="text-center p-4 fw-bold">
        1941720062- Faris Ikhlasul Haq
        </p>
      )}
     
    </footer>
  );
};

export default Footer;
