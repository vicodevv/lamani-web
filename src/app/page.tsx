"use client"

import Head from 'next/head';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>LAMANI - Luxury Clothing</title>
        <meta name="description" content="LAMANI luxury clothing collection" />
      </Head>
      
      <Header transparent={true} />
      
      <HeroSection />
    </>
  );
}