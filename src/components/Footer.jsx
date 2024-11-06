import React from "react";

const Footer = () => {
  return (
    <footer className="container flex flex-col md:flex-row align-bottom justify-center gap-5 px-10 py-24 border-t-2">
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
        <p>
          {" "}
          <span className="font-semibold">Mail:</span>{" "}
          <a href="mailto:mohit.mohit979@gmail.com">mohit.mohit979@gamil.com</a>{" "}
        </p>
        <p>
          <span className="font-semibold">Mob:</span>{" "}
          <a href="https://wa.me/6392859129" target="_blank">6392859129</a>{" "}
        </p>
        <p>
          <span className="font-semibold">Linkedin:</span>{" "}
          <a href="https://www.linkedin.com/in/varun-jatav-98ba16226/">
            Varun Jatav
          </a>
        </p>
      </section>
      <section className="flex-1">
        <h1 className="font-semibold text-lg">Important Links</h1>
        <p>My Account</p>
        <p>My Cart</p>
        <p>Men's</p>
        <p>Women's</p>
      </section>
      <section className="flex-1">
        <h1 className="font-semibold text-lg">Newsletter</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
          numquam unde maiores perspiciatis earum non architecto nostrum quaerat
          asperiores fugit ut consequatur deserunt culpa accusamus natus aliquid
          quod voluptate consectetur.
        </p>
        <div className="pt-3">
        <input type="text" placeholder="Email Address" className="px-2 py-1 rounded-sm" />
        <button className="bg-blue-600 text-white py-1 px-2 rounded-md hover:bg-blue-500">Send</button>
        </div>
        
      </section>
    </footer>
  );
};

export default Footer;
