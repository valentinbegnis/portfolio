'use client';

import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { toast } from 'sonner';

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const { name, email, message } = Object.fromEntries(formData.entries());

    const alphanumericRegex = /[A-Za-z0-9]/g;
    const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

    if (
      alphanumericRegex.test(name as string)
      && alphanumericRegex.test(message as string)
      && emailRegex.test(email as string)
    ) {
      setIsLoading(true);
      fetch('/api/kv-send-message', {
        method: 'POST',
        body: JSON.stringify({ name, email, message }),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(async (res) => {
        const emailResponse = await emailjs.send(
          'service_mvtk0gw',
          'template_2iiykiw',
          { name, email, message },
          'PRQ-d2z2kgexYw4UE',
        );

        if (res.ok && emailResponse.status === 200) {
          toast.success('Email sent and contact saved. Thank you!');
          form.reset();
        } else {
          toast.error('There was an error sending the email and saving the contact.');
        }
      }).catch(() => {
        toast.error('There was an error saving the contact.');
      }).finally(() => {
        setIsLoading(false);
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex flex-col gap-4 p-4 w-80"
    >
      <label className="flex flex-col gap-2">
        <p>
          Name
          <span className="text-bigbang">*</span>
        </p>
        <input
          type="text"
          name="name"
          required
          className="px-2 py-1 bg-transparent border rounded-md border-star/20"
        />
      </label>
      <label className="flex flex-col gap-2">
        <p>
          Email
          <span className="text-bigbang">*</span>
        </p>
        <input
          type="email"
          name="email"
          required
          className="px-2 py-1 bg-transparent border rounded-md border-star/20"
        />
      </label>
      <label className="flex flex-col gap-2">
        <p>
          Message
          <span className="text-bigbang">*</span>
        </p>
        <textarea
          name="message"
          required
          className="px-2 py-1 rounded-md border border-star/20 bg-transparent min-h-[60px] max-h-[200px]"
        />
      </label>
      <button
        type="submit"
        disabled={isLoading}
        className="py-1 text-xl font-bold rounded-md text-void bg-gradient-to-r from-bigbang via-nebula to-sun"
      >
        {isLoading ? 'Sending' : 'Send'}
      </button>
      <div className="absolute top-0 left-0 w-full h-full border rounded-md shadow-md glass -z-10 border-star/20 shadow-stardust/10" />
    </form>
  );
}
