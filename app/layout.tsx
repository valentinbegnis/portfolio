import '@/styles/globals.css';
import { Space_Grotesk as spaceGrotesk } from 'next/font/google';
import Header from '@/components/Header';

export const metadata = {
  title: 'Valentín Begnis | Software Developer',
  description: 'Portfolio',
};

const font = spaceGrotesk({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-grotesk',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.variable}>
        <Header />
        <main className="flex justify-center items-center">
          {children}
        </main>
        <div className="shooting-stars-animation">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="bg-animation">
          <div className="stars" />
          <div className="stars2" />
          <div className="stars3" />
          <div className="stars4" />
        </div>
      </body>
    </html>
  );
}
