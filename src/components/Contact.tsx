import React from "react";

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  return (
    <section className="position absolute left-1/2 top-1/2">
      <h1>Contact</h1>

      <ul>
        <li>Linkedin</li>
        <li>GMail</li>
      </ul>
    </section>
  );
};

export default Contact;
