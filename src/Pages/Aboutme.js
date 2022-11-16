import React, { useRef, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { img } from "../assets/img";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import { useInView } from 'framer-motion'

const Aboutme = () => {

  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    console.log("Element is in view: en contacto ", isInView)
  }, [isInView])

  const form = useRef();

  const toTop = () => {
    window.scroll(0, 0);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("Gmail", "template_f7j8tck", form.current, "XStE7U5RpCfrWfNBD")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section className="w-full h-screen bg-[#0D070F] grid grid-cols-2 content-center place-content-center sm:flex sm:flex-col">
      <div className="w-full h-full  flex flex-col justify-start " ref={ref}>
        <img
          className="w-48 h-48 2xl:w-80 2xl:h-80 -left-5 rounded-full bg-transparent mx-auto mt-10"
          src={img.contact}
          alt="contact me"
        />
        <div className="flex flex-col justify-center content-center mx-auto">
          <h2 className="text-white text-4xl 2xl:text-5xl m-auto my-10">
            <FormattedMessage id="LetsTalk" />
          </h2>
          <form onSubmit={sendEmail} ref={form}>
            <div>
              <input
                className="rounded-3xl focus:outline-none focus:border-solid focus:border-4 focus:border-cyan-600 w-96 h-12 p-2"
                type="text"
                name="user_name"
                placeholder="Name"
              />
            </div>
            <div>
              <input
                className="rounded-3xl focus:outline-none focus:border-solid focus:border-4 focus:border-cyan-600 w-96 h-12 p-2 my-5"
                type="email"
                name="user_email"
                placeholder="Email"
              />
            </div>
            <div>
              <textarea
                className="rounded-2xl focus:outline-none focus:border-solid focus:border-4 focus:border-cyan-600 w-96 h-28 p-2"
                type="text"
                name="message"
                placeholder="Tell me about it..."
              ></textarea>
            </div>
            <button
              className="text-white text-xl font-semibold rounded-2xl border-solid border-2 border-white hover:text-cyan-400 hover:border-cyan-400 bg-transparent w-96 p-2 my-4"
              type="submit"
            >
              <FormattedMessage id="send.form" />
            </button>
          </form>
        </div>
      </div>
      <div className="w-[35rem] max-h-full bg-[#0D070F] p-5 mx-auto relative z-10">
        <span className="absolute -top-3 -left-3 w-40 h-40 bg-transparent border-solid border-t-4 border-l-4 border-white"></span>
        <span className="absolute -bottom-3 -right-3 w-40 h-40 bg-transparent border-solid border-b-4 border-r-4 border-white"></span>
        <div className="flex flex-col justify-center gap-y-5 z-10">
          <h2 className="text-white text-4xl 2xl:text-5xl m-auto">
            <FormattedMessage id="aboutme.title" />
          </h2>
          <p className="text-white 2xl:text-lg">
            <FormattedMessage id="aboutme.description" />
          </p>
          <img className="" src={img.coder} alt="CoderHouse Logo" />
          <div className="flex justify-center 2xl:text-xl">
            <a
              className="bg-transparent border-solid border-2 border-white text-white font-mono font-semibold hover:bg-slate-200 hover:text-cyan-600 hover:border-cyan-600 cursor-default p-2"
              href={img.cer}
              download={"Reactjs Certificate"}
            >
              <FormattedMessage id="certificate" />
            </a>
          </div>
          <div className="flex flex-row justify-between my-10">
            <AiOutlineHome
              className="rounded-full border-solid border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#0D070F] w-10 h-10 2xl:w-14 2xl:h-14"
              onClick={() => toTop()}
            />
            <a href="https://www.linkedin.com/in/matias-daniel-gómez-giovagnoli-00b703177">
              <BsLinkedin className="rounded-full border-solid border-2 border-white  text-black bg-white hover:text-blue-600 w-10 h-10 2xl:w-14 2xl:h-14" />
            </a>
            <a href="https://github.com/matuggiovagnoli">
              <BsGithub className="relative rounded-full border-solid border-2 border-white bg-white text-[#0D070F] hover:text-white hover:bg-transparent w-10 h-10 2xl:w-14 2xl:h-14 z-20" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
