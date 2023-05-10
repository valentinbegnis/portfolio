import '@/styles/globals.css';
import { Space_Grotesk as spaceGrotesk } from 'next/font/google';
import Header from '@/components/Header';
import Toaster from '@/components/Toaster';
import ShootingStars from '@/components/ShootingStars';

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

        <div className="bg-animation">
          <div className="stars" />
          <div className="stars2" />
          <div className="stars3" />
          <div className="stars4" />
        </div>
        <ShootingStars />
      </body>
    </html>
  );
}
