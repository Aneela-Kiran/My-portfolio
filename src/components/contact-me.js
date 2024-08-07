
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import image from '../assets/world-wide.png';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
            // if(!formData.name || !formData.phone || !formData.email || !formData.subject || !formData.message){
            //   alert("please fill in all required fields ");
            //   return;
            // }
        emailjs.sendForm(
        'service_h3fb4wj',
        'template_5ptiuhu',
        e.target,
        'WXOE2WF7lBlouSysG'
    ).then((result) => {
      alert('Email sent successfully!', result.text);
    }, (error) => {
      alert('Failed to send email:', error.text);
    });
  };

  return (
    <React.Fragment>
    <section id='contact' className=' py-12 mt-16 mx-auto m-4 px-8'>
      <div className='container mx-auto px-6 m-5'>
        <h1 className='text-yellow-500 text-4xl font-bold mb-16 text-center'>Get In Touch</h1>
        <div className='flex justify-around items-center'>
          {/* Contact Form  */}
          <div className='custom-black shadow-3xl rounded-xl p-10'>
            <form onSubmit={handleSubmit}>
              <div className="flex space-x-4">
                <div className="flex-1">
                  <label htmlFor="name" className="block text-sm text-white">YOUR NAME</label>
                  <input
                    type="text"
                    name="from_name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full text-white about-background py-2 px-3 bg-white-500 rounded-md shadow-xl focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:text-sm"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="phone" className="block text-sm text-white">PHONE NUMBER</label>
                  <input
                    type="text"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full py-2 px-3 text-white about-background rounded-md shadow-2xl focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:text-sm"
                  />
                </div>
              </div>
              <p className='text-white mb-1'>Email</p>
              <input
                name="reply_to"
                value={formData.email}
                onChange={handleChange}
                className='mb-3 shadow appearance-none text-white about-background rounded w-full py-2 px-3 leading-tight focus:shadow-outline'
                type='email'
              />
              <p className='text-white mb-1'>Subject</p>
              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                type='text'
                className='mb-3 shadow about-background text-white appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
              />
              <p className='text-white mb-1'>Your Message</p>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="shadow appearance-none text-white rounded w-full py-2 px-3 about-background"
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

          <div className='mt-14 p-4 hidden md:block'>
            <img className='size-96' src={image} alt="World Wide" />
          </div>
        </div>
      </div>
    </section>
    </React.Fragment>
  );
}

export default ContactMe;