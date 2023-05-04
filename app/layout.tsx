import '@/styles/globals.css';
import { Space_Grotesk as spaceGrotesk } from 'next/font/google';
import Header from '@/components/Header';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import Toaster from '@/components/Toaster';

export const metadata = {
  title: 'Valentín Begnis | Full Stack Developer',
  description: 'Welcome to my portfolio!',
  icons: {
    icon: '/planet.svg',
  },
};

const font = spaceGrotesk({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-grotesk',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.variable}>
        <Header />
        <Toaster />
        <main className="relative flex items-center justify-center">
          {children}
        </main>
        <BackgroundAnimation />
      </body>
    </html>
  );
}
