"use client";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { styles } from "./styles";
import { Translate } from "translate-easy";
import { Button, Input, Spinner, Textarea } from "@material-tailwind/react";
import { contactSchema } from "@/schema/userSchema";
import {  TypingText } from "@/components/TypingText";
import { staggerContainer } from "@/utils";

const Contact = () => {
  const formRef = useRef();
  const [Form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const handelChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...Form, [name]: value });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      contactSchema.validateSync(
        {
          name: Form.name,
          email: Form.email,
          message: Form.message,
        },

        { abortEarly: false }
      );
    } catch (error) {
      setLoading(false);
      setError(error.errors);
      return;
    }

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
          setSuccess(true);
          toast.success(
            <p>
              <Translate>Thank you</Translate>
              <span className="text-green-500">{Form.name}</span>
              !,{" "}
              <Translate>
                I&apos;ve got your message and I&apos;ll reach out to you soon
              </Translate>
              .
            </p>,
            {
              position: "top-right",
              autoClose: 5700,
            }
          );
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
              <Translate>Sorry</Translate>{" "}
              <span className="text-[#ee524d] font-extrabold">{Form.name}</span>{" "}
              <Translate>something went wrong</Translate>.
            </p>
          );
          console.error(err);
        }
      );
  };

  return (
    <section id="contact" className="overflow-hidden shadow-lg pb-8">
      <div className="title text-center">
      <motion.div
        className={`${styles.paddingX}`}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
      >
        <TypingText title="| Contact me" />
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring" }}
          className={` ${styles.sectionHeadText} mb-24 font-bold`}
        >
          <span className="text-theme-color">04.</span>{" "}
          <Translate>Get in Touch</Translate>
        </motion.h1>
      </motion.div>
      </div>
      <motion.div
        // variants={slideIn("right", "tween", 0.2, 1)}
        className=" w-[80%] mx-auto bg-[#100d25] p-8 rounded-2xl"
      >
        <h3 className="text-3xl mx-auto text-stone-50 ">
          <Translate>Contact</Translate>.
        </h3>
        <form
          ref={formRef}
          className="flex flex-col gap-8 mt-12"
          onSubmit={handelSubmit}
          noValidate
        >
          <Input
            label={<Translate>Name</Translate>}
            type="text"
            name="name"
            autoComplete="on"
            required
            onChange={handelChange}
            className="text-gray-300"
            size="lg"
            color="indigo"
            success={success}
            error={error}
          />
          <Input
            label={<Translate>Email</Translate>}
            type="email"
            name="email"
            autoComplete="on"
            required
            onChange={handelChange}
            className="text-gray-300"
            size="lg"
            color="indigo"
            success={success}
            error={error}
          />
          <Textarea
             label={
              <>
                <Translate>Message</Translate>&nbsp;
                <span className="text-red-500">*</span>
              </>
            }
            rows={1}
            resize={true}
            required
            name="message"
            onChange={handelChange}
            className="text-gray-300"
            size="lg"
            color="indigo"
            success={success}
            error={error}
          />
          {error && (
            <ol className="flex list-decimal flex-col gap-1 text-red-500 mx-4 ltr:text-left rtl:text-right">
              {error.map((err, key) => {
                return (
                  <li key={key} className="my-3">
                    *<Translate>{err}</Translate>
                  </li>
                );
              })}
            </ol>
          )}
          <Button
            type="submit"
            className="bg-theme-color py-3 text-xl w-[40%] mx-auto text-white shadow-md"
          >
            {loading ? (
              <Spinner color="green" className="mx-auto" />
            ) : (
              <Translate translations={{ ar: "أرسل" }}>Send</Translate>
            )}
          </Button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
