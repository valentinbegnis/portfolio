import ContactForm from '@/components/ContactForm';
import { GmailIcon } from '@/components/icons/Icons';

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center gap-20 pt-32 pb-16 text-star">
      <h1 className="text-4xl font-bold text-center text-nebula">Contact me</h1>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-medium text-center text-sky">Send me an email</h2>
        <ContactForm />
        <a
          href="mailto:begnisvalentin@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 text-star/50"
        >
          <GmailIcon width={32} height={32} className="text-star/50" />
          <span className="hover:underline">
            begnisvalentin@gmail.com
          </span>
        </a>
      </div>
    </div>
  );
}
