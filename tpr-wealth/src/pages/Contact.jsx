import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enroll: "Mutual funds",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      setFormStatus("Please fill out all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://sri-krishna-technologies.onrender.com/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", enroll: "", message: "" });
        setFormStatus("");
      } else {
        setFormStatus("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setFormStatus("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="px-6 py-16">
      <h2 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white text-center">
        Contact Us
      </h2>

      {!submitted && (
        <p className="text-gray-400 text-center mb-10">
          Need support or have questions? Fill out the form below, and our team will contact you shortly.
        </p>
      )}

      <div className="max-w-2xl mx-auto bg-gray-800 p-6 rounded-lg shadow-md">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="block text-gray-400 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-gray-500"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-gray-400 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-gray-500"
                required
              />
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-gray-400 mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-gray-500"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-gray-400 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                rows="5"
                className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-gray-500"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-gray-300 to-gray-500 text-black px-8 py-3 rounded-lg hover:from-gray-400 hover:to-gray-600"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Thank you for reaching out!</h3>
            <p>Our team will contact you shortly. We look forward to assisting you.</p>
            <div className="mt-6">
              <Link
                to="/"
                className="bg-gradient-to-r from-gray-300 to-gray-500 text-black px-8 py-3 rounded-lg hover:from-gray-400 hover:to-gray-600"
              >
                Want to Explore? Go to Home
              </Link>
            </div>
          </div>
        )}

        {/* Error or Success Messages */}
        {formStatus && <p className="text-red-400 text-center mt-4">{formStatus}</p>}
      </div>
    </div>
  );
};

export default Contact;
