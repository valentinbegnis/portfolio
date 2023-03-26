'use client';

import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import GmailIcon from '@/components/icons/Gmail';

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form

    if (form.current) {
      emailjs.sendForm(
        'service_x25drwp',
        'template_2iiykiw',
        form.current,
        'PRQ-d2z2kgexYw4UE',
      )
        .then((result) => {
          console.log(result.text);
          // Empty the fields
        }, (error) => {
          console.log(error.text);
        });
    }
  };

  return (
    <div className="pt-24 flex flex-col items-center gap-8 text-star">
      <h1 className="text-4xl text-center font-bold text-nebula">Contact me</h1>
      <div className="relative top-20 flex gap-10">
        <div className="flex flex-col gap-4">
          <h2 className="font-medium text-2xl text-sky text-center">Send me an email</h2>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-80 p-4 relative flex flex-col gap-4"
          >
            <label htmlFor="name" className="flex flex-col gap-2">
              Name
              <input
                type="text"
                name="user_name"
                id="name"
                className="px-2 py-1 rounded-md border border-star/20 bg-transparent"
              />
            </label>
            <label htmlFor="email" className="flex flex-col gap-2">
              Email
              <input
                type="email"
                name="user_email"
                id="email"
                className="px-2 py-1 rounded-md border border-star/20 bg-transparent"
              />
            </label>
            <label htmlFor="message" className="flex flex-col gap-2">
              Message
              <textarea
                name="message"
                id="message"
                className="px-2 py-1 rounded-md border border-star/20 bg-transparent min-h-[60px] max-h-[200px]"
              />
            </label>
            <button type="submit" className="py-1 rounded-md font-bold text-xl text-void mix-blend-lighten bg-gradient-to-r from-bigbang via-nebula to-sun">Send</button>
            <div className="glass absolute top-0 left-0 h-full w-full -z-10 border border-star/20 rounded-md shadow-md shadow-stardust/10" />
          </form>
          <a
            href="mailto:begnisvalentin@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center gap-2 text-star/50"
          >
            <GmailIcon width={32} height={32} className="text-star/50" />
            <span>
              begnisvalentin@gmail.com
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
