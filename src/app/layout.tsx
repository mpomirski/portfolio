import type { Metadata } from 'next';
import { Press_Start_2P } from 'next/font/google';
import './globals.css';

const presStart2P = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Michał Pomirski',
  description: 'My portfolio website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={presStart2P.className}>{children}</body>
    </html>
  );
}
