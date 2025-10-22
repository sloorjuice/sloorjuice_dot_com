import Header from "@/components/Header";
import Image from "next/image";

export default function Blog() {
  return (
	<>
	  <Header />
	  
	  <main className="flex flex-col items-center p-5 gap-5">
        <p className="font-bold text-xl">Page is under construction, check back soon.</p>
	  </main>
	</>
  );
}
