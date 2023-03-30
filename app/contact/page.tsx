'use client';

import { useRef, useState } from 'react';
import { Transition } from '@headlessui/react';
import emailjs from '@emailjs/browser';
import GmailIcon from '@/components/icons/Gmail';
import CheckIcon from '@/components/icons/CheckIcon';
import CrossIcon from '@/components/icons/CrossIcon';
import CrossCircledIcon from '@/components/icons/CrossCircledIcon';

export default function ContactPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [isError, setIsError] = useState(false);

  const form = useRef<HTMLFormElement>(null);
  const username = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const message = useRef<HTMLTextAreaElement>(null);

  const handleClick = () => {
    setShowPopup(false);
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      const alphanumericRegex = /[A-Za-z0-9]/g;
      const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
      setIsError(false);

      if (
        alphanumericRegex.test(username.current!.value)
        && alphanumericRegex.test(message.current!.value)
        && emailRegex.test(email.current!.value)
      ) {
        emailjs.sendForm(
          'service_mvtk0gw',
          'template_2iiykiw',
          form.current,
          'PRQ-d2z2kgexYw4UE',
        )
          .then(() => {
            username.current!.value = '';
            email.current!.value = '';
            message.current!.value = '';
          })
          .catch(() => setIsError(true))
          .finally(() => setShowPopup(true));
      }
    }
  };

  return (
    <div className="pt-32 pb-16 flex flex-col items-center gap-20 text-star">
      <h1 className="text-4xl text-center font-bold text-nebula">Contact me</h1>
      <div className="flex flex-col gap-4">
        <Transition
          show={showPopup}
          enter="transition-opacity duration-250"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="absolute top-6 right-6 z-20 shadow-lg shadow-void/50"
        >
          <div className="w-[275px] flex flex-col gap-3 bg-star text-void p-3 rounded-md">
            <button
              type="button"
              className="absolute top-1 right-1 self-end"
              onClick={handleClick}
            >
              <CrossIcon width={24} height={24} className="text-stardust/50" />
            </button>
            <div className="flex items-center gap-2">
              {!isError
                ? <CheckIcon width={24} height={24} className="text-[#84ba64]" />
                : <CrossCircledIcon width={24} height={24} className="text-bigbang" />}
              <h3 className="font-medium text-lg">
                {!isError ? 'Email sent. Thank you!' : 'There was an error'}
              </h3>
            </div>
            <p>
              {!isError ? 'I will respond to you promptly' : 'Please try again later. Sorry'}
            </p>
          </div>
        </Transition>

        <h2 className="font-medium text-2xl text-sky text-center">Send me an email</h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-80 p-4 relative flex flex-col gap-4"
        >
          <label htmlFor="name" className="flex flex-col gap-2">
            <p>
              Name
              <span className="text-bigbang">*</span>
            </p>
            <input
              ref={username}
              type="text"
              name="user_name"
              id="name"
              required
              className="px-2 py-1 rounded-md border border-star/20 bg-transparent"
            />
          </label>
          <label htmlFor="email" className="flex flex-col gap-2">
            <p>
              Email
              <span className="text-bigbang">*</span>
            </p>
            <input
              ref={email}
              type="email"
              name="user_email"
              id="email"
              required
              className="px-2 py-1 rounded-md border border-star/20 bg-transparent"
            />
          </label>
          <label htmlFor="message" className="flex flex-col gap-2">
            <p>
              Message
              <span className="text-bigbang">*</span>
            </p>
            <textarea
              ref={message}
              name="message"
              id="message"
              required
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
  );
}
