"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          example@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email telah berhasil dikirim");
        }}
      >
        {/* Input fields for email and message */}
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        {/* ... input fields ... */}
        <SubmitBtn />
      </form>
      {/* Social Media Icons with Animation */}
      <motion.div
        className="mt-6 flex justify-center space-x-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <a href="https://twitter.com/wisnuary15?t=WTeWK3TcT3quI2DYuZg6KQ&s=09" target="_blank" rel="noopener noreferrer">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => toast("Jangan Lupa Follow!")} // Notifikasi saat tombol Twitter ditekan.
          >
            <FaTwitter className="text-blue-500 hover:text-blue-700 dark:text-white/80 dark:hover:text-white" size={24} />
          </motion.div>
        </a>
        <a href="https://www.linkedin.com/in/wisnu-ary-swadana-a75573281/e" target="_blank" rel="noopener noreferrer">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => toast("Jangan Lupa Follow!")} // Notifikasi saat tombol LinkedIn ditekan.
          >
            <FaLinkedin className="text-blue-500 hover:text-blue-700 dark:text-white/80 dark:hover:text-white" size={24} />
          </motion.div>
        </a>
        <a href="https://www.instagram.com/wisnuary15/" target="_blank" rel="noopener noreferrer">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => toast("Jangan Lupa Follow!")} // Notifikasi saat tombol Instagram ditekan.
          >
            <FaInstagram className="text-pink-500 hover:text-pink-700 dark:text-white/80 dark:hover:text-white" size={24} />
          </motion.div>
        </a>
        <a href="https://web.facebook.com/wisnuary15/" target="_blank" rel="noopener noreferrer">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => toast("Jangan Lupa Follow!")} // Notifikasi saat tombol Facebook ditekan.
          >
            <FaFacebook className="text-blue-600 hover:text-blue-800 dark:text-white/80 dark:hover:text-white" size={24} />
          </motion.div>
        </a>
        <a href="https://www.tiktok.com/@wisnuary15" target="_blank" rel="noopener noreferrer">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => toast("Jangan Lupa Follow!")} // Notifikasi saat tombol TikTok ditekan.
          >
            <FaTiktok className="text-pink-500 hover:text-pink-700 dark:text-white/80 dark:hover:text-white" size={24} />
          </motion.div>
        </a>
      </motion.div>

    </motion.section>
  );
}
