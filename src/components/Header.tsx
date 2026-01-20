import React from 'react';
import { FaGithub, FaYoutube, FaTiktok } from 'react-icons/fa6';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="relative flex flex-col items-center justify-center border-b-2 border-black bg-[#9884af] dark:bg-[#4e2d6c] py-2 sm:py-4">
      <h1 className="text-3xl sm:text-6xl font-bold m-1 sm:m-2 mb-0">sloor.dev</h1>
      <nav className="mt-1 sm:mt-2 flex gap-2 sm:gap-4">
        <Link href="/" className="hover:underline text-base sm:text-lg">Home</Link>
        <Link href="/about" className="hover:underline text-base sm:text-lg">About</Link>
        <Link href="/portfolio" className="hover:underline text-lg">Portfolio</Link>
        <a href="https://sloorjuice.itch.io" target="_blank" rel="noopener noreferrer" className="hover:underline text-base sm:text-lg flex items-center gap-1">
          Games
          <span aria-label="External link" title="External link" className="inline-block align-middle">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="14" height="14" className="sm:w-4 sm:h-4 w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75V17.25a2.25 2.25 0 01-2.25 2.25H6.75a2.25 2.25 0 01-2.25-2.25V9a2.25 2.25 0 012.25-2.25H13.5M15.75 3.75h4.5m0 0v4.5m0-4.5L10.5 13.5" />
            </svg>
          </span>
        </a>
        <a href="https://theroyalscode.com/students/a_reynolds/" target="_blank" rel="noopener noreferrer" className="hover:underline text-base sm:text-lg flex items-center gap-1">
          Blog
          <span aria-label="External link" title="External link" className="inline-block align-middle">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="14" height="14" className="sm:w-4 sm:h-4 w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75V17.25a2.25 2.25 0 01-2.25 2.25H6.75a2.25 2.25 0 01-2.25-2.25V9a2.25 2.25 0 012.25-2.25H13.5M15.75 3.75h4.5m0 0v4.5m0-4.5L10.5 13.5" />
            </svg>
          </span>
        </a>
        {/* <Link href="/projects" className="hover:underline">Projects</Link> */}
        {/* <Link href="/jukebox" className="hover:underline">Jukebox</Link> */}
      </nav>
      {/* Social links bottom right of header */}
      <div className="absolute bottom-1 right-2 flex flex-col gap-2 sm:flex-row sm:gap-3">
        <a href="https://github.com/sloorjuice" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:opacity-80">
          <FaGithub size={24} className="sm:w-6 sm:h-6 w-6 h-6" />
        </a>
        <a href="https://youtube.com/@sloorjuice" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:opacity-80">
          <FaYoutube size={24} className="sm:w-6 sm:h-6 w-6 h-6" />
        </a>
        <a href="https://www.tiktok.com/@sloorjuice" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:opacity-80">
          <FaTiktok size={24} className="sm:w-6 sm:h-6 w-6 h-6" />
        </a>
      </div>
    </div>
  );
}