import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="flex flex-col items-center justify-center border-b-2 border-black bg-[#9884af] dark:bg-[#4e2d6c]">
      <h1 className="text-6xl font-bold m-2 mb-0">sloor.dev</h1>
      <h2 className="text-md underline">Everything Sloorjuice.</h2>
      <nav className="mt-2 flex gap-4">
        <Link href="/" className="hover:underline text-lg">Home</Link>
                <Link href="/about" className="hover:underline text-lg">About</Link>
        <Link href="/portfolio" className="hover:underline text-lg">Portfolio</Link>
        <a href="https://sloorjuice.itch.io" target="_blank" rel="noopener noreferrer" className="hover:underline text-lg">Games</a>
        <a href="https://theroyalscode.com/students/a_reynolds/" target="_blank" rel="noopener noreferrer" className="hover:underline text-lg">Blog</a>
        {/* <Link href="/projects" className="hover:underline">Projects</Link> */}
        {/* <Link href="/jukebox" className="hover:underline">Jukebox</Link> */}
      </nav>
    </div>
  );
}