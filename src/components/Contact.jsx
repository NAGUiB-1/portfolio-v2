import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaFacebookSquare,
  FaWhatsappSquare,
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const iconWrapper =
  "bg-white rounded-3xl cursor-pointer anim relative w-[160px] h-[160px]  group overflow-hidden ";
const inputStyle =
  "w-full p-2 rounded-xl bg-transparent border-[#3c3c3c] border-4 text-xl";

const Contact = () => {
  // Template ID:template_cr76a0n
  // Service ID:service_lw82ooo
  // 5vWHMPD7hbCWCzeeQ

  const form = useRef();
  let [sent, setSent] = useState(false);
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [subject, setSubject] = useState("");
  let [messege, setMessege] = useState("");
  const sendEmail = (e) => {
    setSent(false);
    e.preventDefault();
    function erase() {
      setName("");
      setSubject("");
      setEmail("");
      setMessege("");
    }
    emailjs
      .sendForm(
        "service_lw82ooo",
        "template_cr76a0n",
        form.current,
        "5vWHMPD7hbCWCzeeQ"
      )
      .then((result) => {
        setSent(true);
        erase();
        setTimeout(() => {
          setSent(false);
        }, 5000);
      });
  };

  return (
    <div className="mb-20 pt-20" id="contact">
      <h3
        className="w-full md:text-6xl text-4xl text-center font-['Anton'] uppercase mb-10"
        data-aos="fade-down"
        data-aos-anchor-placement="bottom-bottom"
      >
        Get Contact With Me !
      </h3>
      <div
        className="w-full  text-2xl font-serif font-bold my-10 flex justify-center items-center"
        data-aos="zoom-in"
        data-aos-anchor-placement="bottom-bottom"
      >
        <hr className="w-full border-2" />
        <span className="w-fit whitespace-pre font-['Black_Ops_One']">
          {"    "}You Will Find Me Here {"    "}
        </span>
        <hr className="w-full border-2" />
      </div>
      <div className="flex gap-10 justify-center flex-col md:flex-row items-center ">
        <a
          href="https://fb.com/nagu1b"
          target="_blank"
          className={iconWrapper}
          data-aos="flip-down"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-delay={100}
        >
          <div className=" w-full h-0 bg-[#1d1d1d] absolute z-10 overlay group-hover:h-full transition-all" />
          <FaFacebookSquare
            fill="#0a73f7"
            size={160}
            className="absolute z-20"
          />
        </a>
        <a
          href="https://linkedin.com/mwlite/in/eslam-naguib-146831222"
          target="_blank"
          className={iconWrapper}
          data-aos="flip-down"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-delay={200}
        >
          <div className=" w-full h-0 bg-[#1d1d1d] absolute z-10 overlay group-hover:h-full transition-all" />

          <FaLinkedin fill="#0077B5" size={160} className="absolute z-20" />
        </a>

        <a
          href="https://github.com/NAGUiB-1"
          target="_blank"
          className={iconWrapper}
          data-aos="flip-down"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-delay={300}
        >
          <div className=" w-full h-0 bg-[#1d1d1d] absolute z-10 overlay group-hover:h-full transition-all" />

          <FaGithubSquare size={160} fill="#000" className="absolute z-20" />
        </a>
        <a
          href="https://wa.me/201551304668"
          target="_blank"
          className={iconWrapper}
          data-aos="flip-down"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-delay={400}
        >
          <div className=" w-full h-0 bg-[#1d1d1d] absolute z-10 overlay group-hover:h-full transition-all" />

          <FaWhatsappSquare
            fill="#4fce5d"
            size={160}
            className="absolute z-20"
          />
        </a>
      </div>
      <div
        className="w-full  text-2xl font-serif font-bold my-10 flex justify-center items-center"
        data-aos="zoom-in"
        data-aos-anchor-placement="bottom-bottom"
      >
        <hr className="w-full border-2" />
        <span className="w-fit whitespace-pre font-['Black_Ops_One']">
          {"    "}Or Send Me an E-mail{"    "}
        </span>
        <hr className="w-full border-2" />
      </div>
      <div className="w-full flex justify-center items-center h-full flex-col">
        <form
          className="flex flex-col max-w-[700px] w-full gap-4"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="flex w-full gap-4 flex-col md:flex-row">
            <input
              type="text"
              placeholder="Name .."
              className={inputStyle}
              value={name}
              onChange={(e) => setName(e.target.value)}
              data-aos="fade-right"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-delay={50}
            />
            <input
              type="text"
              placeholder="Subject .."
              value={subject}
              className={inputStyle}
              onChange={(e) => setSubject(e.target.value)}
              data-aos="fade-right"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-delay={100}
            />
          </div>
          <input
            type="Email"
            placeholder="Email .."
            className={inputStyle}
            value={email}
            name="user_email"
            onChange={(e) => setEmail(e.target.value)}
            data-aos="fade-right"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-delay={150}
          />
          <textarea
            cols="30"
            rows="10"
            placeholder="Your Messege Here"
            className={inputStyle}
            name="message"
            value={messege}
            onChange={(e) => setMessege(e.target.value)}
            data-aos="fade-right"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-delay={200}
          ></textarea>

          <div
            className={`${inputStyle} cursor-pointer relative group overflow-hidden h-[60px]`}
            data-aos="fade-right"
            data-aos-anchor-placement="center-bottom"
            data-aos-delay={300}
          >
            <div className="absolute w-full transition-all group-hover:h-full bg-blue-600 left-0 top-0 h-0 z-[1]" />
            <button
              type="submit"
              className="absolute z-[2] text-center w-full text-2xl font-bold uppercase left-0 top-0 h-full"
            >
              submit
            </button>
          </div>
        </form>
      </div>
      <Popup
        open={sent}
        onClose={() => {
          setSent(false);
        }}
        position="right center"
        modal
      >
        <div className="bg-green-500 text-2xl font-bold text-center p-4">
          Message Sent Successfully
        </div>
      </Popup>
    </div>
  );
};

export default Contact;
