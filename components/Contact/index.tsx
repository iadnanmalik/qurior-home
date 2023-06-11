"use client";

import NewsLatterBox from "./NewsLatterBox";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();
    if (
      !e.target.user_name.value ||
      !e.target.email.value ||
      !e.target.message.value
    ) {
      setError("Please fill all the fields before submitting ");
    } else {
      setError("");

      setLoading(true);
      emailjs
        .sendForm(
          "service_4bs0kei",
          "template_4d2m718",
          form.current,
          "aAo2oG6dmI_vjM4rC"
        )
        .then(
          (result) => {
            console.log(result.text);
            setLoading(false);
            setSent(true);
            setTimeout(() => {
              setSent(false);
            }, 3000);
          },
          (error) => {
            setError(error.text);
          }
        );
    }
  };
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Ready to work with us? Let&apos;s talk!
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p>
              <form onSubmit={sendEmail} ref={form}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        name="user_name"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Enter your Message"
                        className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    {error ? (
                      <p className="text-sm text-yellow">{error}</p>
                    ) : null}
                    <button
                      type="submit"
                      className="rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
                    >
                      {loading ? "Sending..." : "Submit"}
                    </button>
                    {sent ? (
                      <div className="fixed z-50 animate-fade-in right-2 top-20 bg-primary py-4 px-4 rounded-lg text-white flex items-center">
                        <svg
                          className="h-4 w-4 mr-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM5.172 9.828a.5.5 0 01.708 0L9 12.293l4.12-4.12a.5.5 0 11.708.708l-4.5 4.5a.5.5 0 01-.708 0l-2.5-2.5a.5.5 0 010-.708z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <div>
                          <h2 className="text-2xl font-bold mb-2">
                            Email Sent!
                          </h2>
                          <p className="text-sm">
                            Stay tuned! Our team is getting back to you.
                          </p>
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
