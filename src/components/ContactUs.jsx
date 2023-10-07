"use client";
import React, { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const fromSubmit = async (e) => {
    e.preventDefault();
    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Subject: ", subject);
    console.log("Message: ", message);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message
      })
    });
    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);
    if(success){
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };
  return (
    <div className="w-full my-24 mx-auto">
      <section className="bg-black rounded-lg  px-1 flex_col_mid min-w-[375] md:min-w-[700px] lg:min-w-[1000px] md:flex-row md:px-8">
        <div className=" flex flex-col justify-center py-4 lg:py-16 px-4 mx-auto max-w-md md:max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
            Contact Us
          </h2>
          <p className="font-light text-center md:text-left text-white sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <p className="hidden md:flex font-light text-left text-white sm:text-xl">
            Gazipur, Dhaka, Bangladesh <br />
            +88 01521 774818 <br />
            synafeia.tech@gmail.com
          </p>
        </div>
        <div className="py-4 lg:py-16 px-4 mx-auto w-full md:min-w-fit">
          <form onSubmit={fromSubmit} class="space-y-8">
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-300"
              >
                Your Name
              </label>
              <input
                type="text"
                id="username"
                className="shadow-sm bg-white text-gray-900 text-sm rounded-lg block w-full p-2.5 border border-orange-500 focus:ring-0 focus:outline-none focus:border-2 focus:scale-105"
                placeholder="Enter your name here..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              ></input>
            </div>
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-white text-gray-900 text-sm rounded-lg block w-full p-2.5 border border-orange-500 focus:ring-0 focus:outline-none focus:border-2 focus:scale-105"
                placeholder="name@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              ></input>
            </div>
            <div>
              <label
                for="subject"
                className="block mb-2 text-sm font-medium text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="shadow-sm bg-white text-gray-900 text-sm rounded-lg block w-full p-2.5 border border-orange-500 focus:ring-0 focus:outline-none focus:border-2 focus:scale-105"
                placeholder="Let us know how we can help you"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              ></input>
            </div>
            <div className="sm:col-span-2">
              <label
                for="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="shadow-sm bg-white text-gray-900 text-sm rounded-lg block w-full p-2.5 border border-orange-500 focus:ring-0 focus:outline-none focus:border-2 focus:scale-105"
                placeholder="Leave a comment..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 bg-white text-sm font-medium text-center text-black rounded-lg sm:w-fit hover:scale-110"
            >
              Send message
            </button>
            <div>
              {error && error.map((e) => 
              <div className={`text-md font-medium ${success ? "text-green-500": 'text-red-500'}`}>{e}</div>
              )}
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
