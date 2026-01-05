import type { Metadata } from 'next';
import { GeistMono } from 'geist/font/mono';
import './globals.css';

const geistMono = GeistMono;

export const metadata: Metadata = {
  title: 'Flare',
  description: 'Create and share professional pitch cards',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geistMono.variable}>
      <body className="font-mono bg-neutral-950 text-white antialiased selection:bg-purple-500/30 selection:text-purple-200">
        {children}
      </body>
    </html>
  );
}
