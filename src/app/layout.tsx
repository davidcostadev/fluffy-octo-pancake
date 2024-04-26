import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

import { ApolloWrapper } from 'config/apollo/apollo-wrapper';
import { ConfirmProvider } from 'core/components/ui/confirm';

import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  display: 'swap',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'David Costa - Viewstats Full Stack Project',
  description:
    'Users can create, manage, and delete todo items and can access their todo items from anywhere using their account',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ApolloWrapper>
      <html lang="en" className={`${inter.variable}`}>
        <body className="font-inter">
          <ConfirmProvider>{children}</ConfirmProvider>
          <Toaster />
        </body>
      </html>
    </ApolloWrapper>
  );
}
