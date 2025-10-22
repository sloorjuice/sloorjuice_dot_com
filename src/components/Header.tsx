import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="flex flex-col items-center justify-center border-b-2 border-black bg-[#a890b6] dark:bg-[#665170]">
      <h1 className="text-5xl font-medium m-2 mb-0">sloor.dev</h1>
      <h2 className="text-md font-light m-1 underline">Everything Sloorjuice.</h2>
      <nav className="mt-2 flex gap-4">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/portfolio" className="hover:underline">Portfolio</Link>
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/blog" className="hover:underline">Blog</Link>
        {/* <Link href="/projects" className="hover:underline">Projects</Link> */}
        {/* <Link href="/jukebox" className="hover:underline">Jukebox</Link> */}
      </nav>
    </div>
  );
}