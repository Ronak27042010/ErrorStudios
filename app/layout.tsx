import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Error Studios | Futuristic Software Company',
  description: 'Premium software studio for apps, websites, games, and custom digital solutions.',
  openGraph: {
    title: 'Error Studios',
    description: 'Building Digital Experiences Beyond Imagination',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
