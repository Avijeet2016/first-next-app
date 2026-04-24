import React from 'react';
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const ContactPage = () => {
    return (
      <div className={roboto.className}>
        <h2>Contact Page</h2>
      </div>
    );
};

export default ContactPage;