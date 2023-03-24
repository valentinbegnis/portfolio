import '@/styles/globals.css';
import Header from '@/components/Header';

export const metadata = {
  title: 'Valentín Begnis - Software Developer',
  description: 'Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
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
          <span />
        </div>

        <div className="bg-animation relative -z-50 bg-void">
          <div className="stars" />
          <div className="stars2" />
          <div className="stars3" />
          <div className="stars4" />
        </div>
      </body>
    </html>
  );
}
