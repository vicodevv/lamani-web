"use client"

import localFont from 'next/font/local';
import { Geist, Geist_Mono } from "next/font/google";
import './globals.css';
import MenuManager from '@/components/navigation/MenuManager';

// Geist font from Google
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const barlowSemiCondensed = localFont({
  variable: '--font-barlow-semi-condensed',
  src: [
    {
      path: '../../public/fonts/BarlowSemiCondensed-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/BarlowSemiCondensed-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/BarlowSemiCondensed-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/BarlowSemiCondensed-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/BarlowSemiCondensed-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/BarlowSemiCondensed-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/BarlowSemiCondensed-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/fonts/BarlowSemiCondensed-SemiBoldItalic.ttf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../../public/fonts/BarlowSemiCondensed-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../../public/fonts/BarlowSemiCondensed-BlackItalic.ttf',
      weight: '900',
      style: 'italic',
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${barlowSemiCondensed.variable} antialiased bg-white text-white font-barlow`}
      >
        <MenuManager>
          {children}
        </MenuManager>
      </body>
    </html>
  );
}