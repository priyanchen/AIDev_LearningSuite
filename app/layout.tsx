import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI Developer Course',
  description: 'Card-based curriculum · Neoclassical Pop Art',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-paper text-ink font-serif">{children}</body>
    </html>
  );
}
