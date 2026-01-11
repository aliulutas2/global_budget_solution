import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BudgetOne | Global Bütçe Konsolidasyon Platformu',
  description: 'Çok lokasyonlu işletmeler için tasarlanmış, Excel kaosunu bitiren, gerçek zamanlı bütçe konsolidasyon platformu.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
