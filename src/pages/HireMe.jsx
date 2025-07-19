import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import gsap from 'gsap';

const HireMe = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_5g0dc9u',         // ✅ Updated Service ID
        'template_0tbsuiw',        // ✅ Updated Template ID
        form.current,
        '68cluGb3Fz_FPfLj-'        // ✅ Updated Public Key
      )
      .then(
        (result) => {
          console.log('SUCCESS:', result.text);
          setSuccess(true);
          form.current.reset();

          gsap.fromTo(
            '.confirmation',
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, ease: 'power4.out' }
          );
        },
        (error) => {
          console.error('FAILED:', error.text);
          alert('❌ Failed to send. Please try again.');
        }
      );
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-3xl bg-gray-100 rounded-xl p-10 shadow-2xl">
        <h2 className="text-4xl font-serif font-bold text-center mb-8 text-black">Hire Me</h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-6 text-black">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-3 rounded-md border w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-3 rounded-md border w-full"
            />
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              className="p-3 rounded-md border w-full"
            />
            <input
              type="text"
              name="role"
              placeholder="Role You’re Hiring For"
              required
              className="p-3 rounded-md border w-full"
            />
          </div>

          <textarea
            name="message"
            placeholder="Interview Details or Message..."
            rows="5"
            required
            className="w-full p-3 rounded-md border"
          ></textarea>

          <button
            type="submit"
            className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-all duration-300"
          >
            Send Request
          </button>
        </form>

        {success && (
          <div className="confirmation text-green-600 text-center mt-6 font-semibold">
            🎉 Your message has been sent! I’ll get back to you soon.
          </div>
        )}
      </div>
    </div>
  );
};

export default HireMe;
