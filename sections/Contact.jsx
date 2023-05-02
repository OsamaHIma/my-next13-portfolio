"use client";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { styles } from "./styles";

const Contact = () => {
  const formRef = useRef();
  const [Form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [validated, setValidated] = useState("");
  const handelChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...Form, [name]: value });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (!e.target.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
      setValidated("not-validated");
      toast.error("Please fill in all fields or enter a valid email address.");
      setLoading(false);
      return;
    }

    setValidated("validated");
    emailjs
      .send(
        "service_5fpbwl8",
        "template_9rfs3ie",
        {
          from_name: Form.name,
          to_name: "Osama",
          from_email: Form.email,
          to_email: "osamaworkemail@gmail.com",
          message: Form.message,
        },
        "6vrrdolbRvNzcJ0Xp"
      )
      .then(
        () => {
          setLoading(false);
          toast.success(
            <p>
              Thank you
              <span className="text-[#52ee4d] font-extrabold">{Form.name}</span>
              !, I&apos;ve got your message and I&apos;ll reach out to you soon.
            </p>,
            {
              position: "top-right",
              autoClose: 5700,
            }
          );
          setValidated("");
          setForm({ name: "", email: "", message: "" });
          document
            .querySelectorAll("input")
            .forEach((input) => (input.value = ""));
          document.querySelector("textarea").value = "";
        },
        (err) => {
          setLoading(false);
          toast.error(
            <p>
              Sorry{" "}
              <span className="text-[#ee524d] font-extrabold">{Form.name}</span>{" "}
              something went wrong.
            </p>
          );
          console.error(err);
        }
      );
  };

  return (
    <section id="contact" className="overflow-hidden shadow-lg pb-8">
      <div className="title text-center">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring" }}
          className={` ${styles.sectionHeadText} mb-24 font-bold`}
        >
         <span className="text-theme-color">04.</span> Get in Touch
        </motion.h1>
      </div>
      <motion.div
        // variants={slideIn("right", "tween", 0.2, 1)}
        className=" w-[80%] mx-auto bg-[#100d25] p-8 rounded-2xl"
      >
        <h3 className="text-3xl mx-auto text-stone-50 ">Contact.</h3>
        <form
          ref={formRef}
          className={`flex flex-col gap-8 mt-12 ${validated}`}
          onSubmit={handelSubmit}
          noValidate
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name:</span>
            <input
              type="text"
              name="name"
              autoComplete="on"
              required
              minLength={4}
              onChange={handelChange}
              placeholder="relax and try to remember"
              className="bg-[#151030] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email:</span>
            <input
              type="email"
              name="email"
              required
              autoComplete="on"
              onChange={handelChange}
              placeholder="Whats's your email?"
              className="bg-[#151030] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message:</span>
            <textarea
              rows="7"
              name="message"
              required
              onChange={handelChange}
              minLength={6}
              placeholder="Finally What do you wanna say?"
              className="bg-[#151030] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="btn bg-theme-color w-[50%] mx-auto text-white shadow-md"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
