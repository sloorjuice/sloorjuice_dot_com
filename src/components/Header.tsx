import React from 'react';

export default function Header() {
  return (
    <div className="flex flex-col items-center justify-center border-b-2 border-black bg-[#a890b6] dark:bg-[#665170]">
      <h1 className="text-5xl font-medium m-2 mb-0">sloor.dev</h1>
      <h2 className="text-md font-light m-1">Everything Sloorjuice.</h2>
    </div>
  );
}