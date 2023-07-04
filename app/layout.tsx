import '@/styles/globals.css';
import { Space_Grotesk as spaceGrotesk } from 'next/font/google';
import Header from '@/components/Header';
import Toaster from '@/components/Toaster';
import ShootingStars from '@/components/ShootingStars';
import Script from 'next/script';

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
      <head>
        <Script
          id="tracker"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", '${process.env.CLARITY_KEY}');`,
          }}
        />
      </head>
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
