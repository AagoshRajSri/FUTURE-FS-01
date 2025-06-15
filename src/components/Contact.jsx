import React, { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setSubmitError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setSubmitError("All fields are required");
      return;
    }

    setIsSubmitting(true);

    axios
      .post("http://localhost:3000/api/contact", formData)
      .then((res) => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("Error sending contact:", err);
        setSubmitError(err.response?.data?.error || "Failed to send message");
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section
      id="contact"
      data-aos="fade-up"
      data-aos-delay="300"
      className="min-h-screen flex items-center justify-center p-6 bg-[#0a0a11]"
    >
      <article className="shadow-lg rounded-lg flex flex-col md:flex-row max-w-5xl w-full bg-[#0a0a11]">
        <aside className="w-full md:w-1/2 relative flex justify-center items-center">
          <div className="absolute z-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-gradient-to-r from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] shadow-[0_0_70px_rgba(182,0,182,0.7)] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          <img
            src="./imghero.png"
            alt="Contact Illustration"
            className="h-[250px] sm:h-[400px] md:h-[485px] w-[300px] sm:w-[480px] object-cover relative z-10 levitate"
          />
        </aside>

        <section className="p-8 w-full md:w-1/2">
          <h2 className="text-4xl font-bold text-center text-white mb-6">
            Contact Me
          </h2>
          {submitError && (
            <p className="text-red-500 text-center mb-4">{submitError}</p>
          )}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-gray-300 font-medium mb-2"
              >
                Name
              </label>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none"
              />

              <label className="block text-gray-300 font-medium mb-2 mt-4">
                Email
              </label>
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-300 font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none"
                rows="5"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-lg ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </form>
        </section>
      </article>

      <style>
        {`
          @keyframes levitate {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .levitate {
            animation: levitate 3s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
}
