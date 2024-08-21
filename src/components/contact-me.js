import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
import emailjs from "emailjs-com";
import image from "../assets/world-wide.png";

const ContactMe = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("please fill in all required fields ");
      return;
    }
    emailjs
      .sendForm(
        "service_oy2lwdm",
        "template_d8vwic7",
        e.target,
        "wfNItYmDuN9EXFTSu"
      )
      .then(
        (result) => {
          alert("Email sent successfully!", result.text);
        },
        (error) => {
          alert("Failed to send email:", error.text);
        }
      );
  };

  return (
    <React.Fragment>
      <section id="contact" className=" py-12 mt-16 mx-auto m-4 px-4 md:px-8">
        <div className="container mx-auto px-6 m-5">
          <h1
            data-aos="zoom-in"
            className="text-yellow-500 text-4xl font-bold mb-16 text-center"
          >
            Get In Touch
          </h1>
          <div
            // data-aos="zoom-in-up"
            // data-aos-duration="500"
            className="flex justify-around items-center"
          >
            {/* Contact Form  */}
            <div className="custom-black shadow-3xl max-w-full md:w-auto  rounded-xl p-10">
              <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap -mx-2">
  <div className="w-full md:w-1/2 px-2 mb-4">
    <label htmlFor="name" className="block text-sm text-white mb-2">
      YOUR NAME
    </label>
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      className="shadow about-background text-white appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
    />
  </div>
  <div className="w-full md:w-1/2 px-2 mb-4">
    <label htmlFor="phone" className="block text-sm text-white mb-2">
      PHONE NUMBER
    </label>
    <input
      type="text"
      name="phone"
      required
      value={formData.phone}
      onChange={handleChange}
      className="shadow about-background text-white appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
    />
  </div>
</div>

                <p className="text-white mb-1">Email</p>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mb-3 shadow about-background text-white appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  type="email"
                />
                <p className="text-white mb-1">Subject</p>
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  type="text"
                  className="mb-3 shadow about-background text-white appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p className="text-white mb-1">Your Message</p>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mb-3 shadow about-background text-white appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  rows={4}
                ></textarea>

                <button
                  type="submit"
                  className="text-white w-full font-bold py-2 px-4 shadow-3xl hover:shadow-[0_0_15px_5px_rgba(255,255,0,0.50)] transition duration-300 ease-in-out flex items-center justify-center gap-2"
                >
                  Send Message
                </button>
              </form>

            </div>

            <div className="mt-14 p-4 hidden md:block">
              <img className="w-96 h-auto" src={image} alt="World Wide" />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ContactMe;
