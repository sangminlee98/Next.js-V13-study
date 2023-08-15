import ContactForm from "@/components/ContactForm";
import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";

const LINKS = [
  { icon: <AiFillGithub />, url: "https://github.com/sangminlee98" },
  {
    icon: <AiFillLinkedin />,
    url: "https://www.linkedin.com/in/%EC%83%81%EB%AF%BC-%EC%9D%B4-453084268/",
  },
  {
    icon: <AiFillYoutube />,
    url: "https://www.youtube.com/channel/UC8PzS8P3x4xQbNe_mVFKTzQ",
  },
];

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-3xl font-bold my-2">Contact Me</h2>
      <p>info@dream-coding.com</p>
      <ul className="flex gap-4 my-2">
        {LINKS.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="text-5xl hover:text-yellow-400"
          >
            {link.icon}
          </a>
        ))}
      </ul>
      <h2 className="text-3xl font-bold my-8">Or Send me an email</h2>
      <ContactForm />
    </section>
  );
}
