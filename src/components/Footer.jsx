import React from "react";

const Footer = () => {
  return (
    <footer className="container flex flex-row align-bottom justify-center gap-5 px-10 py-24">
      <section className="flex-1">
        <h1 className="font-semibold text-lg ">About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quam
          vel aperiam! Culpa magnam ea quod facilis, excepturi in. Quisquam,
          minus. Dolorem perferendis pariatur id, non voluptates quo ipsam
          asperiores?
        </p>
      </section>
      <section className="flex-1">
        <h1 className="font-semibold text-lg">Contact Info</h1>
        <p> <span className="font-semibold">Mail:</span> <a href="mailto:mohit.mohit979@gamil.com">mohit.mohit979@gamil.com</a> </p>
        <p><span className="font-semibold">Mob:</span> <a href="what:+916392859129">6392859129</a> </p>
        <p><span className="font-semibold">Linkedin:</span> <a href="https://www.linkedin.com/in/varun-jatav-98ba16226/">Varun Jatav</a></p>
      </section>
      <section className="flex-1">
        <h1 className="font-semibold text-lg">Important Links</h1>
      </section>
      <section className="flex-1">
        <h1 className="font-semibold text-lg">Newsletter</h1>
      </section>
    </footer>
  );
};

export default Footer;
