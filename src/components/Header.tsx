import React from 'react';
import { FaGithub, FaYoutube, FaTiktok } from 'react-icons/fa6';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="relative flex flex-col items-start sm:items-center justify-center border-b-2 border-black bg-[#9884af] dark:bg-[#4e2d6c] py-1 px-2 sm:py-1 sm:px-0">
      <h1 className="text-3xl sm:text-5xl font-bold m-0 sm:m-1 mb-0 self-start sm:self-center">sloor.dev</h1>
      <nav className="mt-0 sm:mt-1 flex gap-2 sm:gap-4 self-start sm:self-center">
        <Link href="/" className="hover:underline text-base sm:text-lg">Home</Link>

        {/*<Link href="/about" className="hover:underline text-base sm:text-lg">About</Link>*/}

        <Link href="/portfolio" className="hover:underline text-base sm:text-lg">Portfolio</Link>

        {/* <Link href="/projects" className="hover:underline">Projects</Link> */}
        {/* <Link href="/jukebox" className="hover:underline">Jukebox</Link> */}

      </nav>

      {/* Social links bottom right of header */}
      <div className="absolute bottom-1 right-2 flex gap-2 sm:flex-row sm:gap-3">
        <a href="https://github.com/sloorjuice" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:opacity-80">
          <FaGithub size={24} className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
        <a href="https://youtube.com/@sloorjuice" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:opacity-80">
          <FaYoutube size={24} className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
        <a href="https://www.tiktok.com/@sloorjuice" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:opacity-80">
          <FaTiktok size={24} className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
      </div>
    </div>
  );
}