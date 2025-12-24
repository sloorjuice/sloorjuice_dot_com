import Header from "@/components/Header";
import ImageGallery from "@/components/ImageGallery";

export default function Home() {
  const pixelArt = [
    { src: "/alien.gif", alt: "Alien Guy", title: "Cool Alien Character" },
    { src: "/CelestedInspriedBackground.png", alt: "Pixel art 2", title: "Landscape" },
    { src: "/me_idle.gif", alt: "Celeste Inspired Sprite", title: "Celeste inspired Character"},
    { src: "/me_run.gif", alt: "Pixel art 3", title: "Celeste inspired Character" },
    { src: "/orb.gif", alt: "Pixel art 3", title: "Cool Glowing Orb" },
    { src: "/yellowguy_walk.gif", alt: "Pixel art 3", title: "Cool lil' Slug Guy" },
    // Add more images here
  ];

  return (
    <>
      <Header />
      
      <main className="flex flex-col min-h-screen items-center p-5 gap-5">
        <div className="text-center max-w-4xl w-full px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Hello, Internet!</h1>
          <hr className="w-48 mx-auto mt-2 border-t-2 border-black dark:border-white" />
          <p className="text-base sm:text-lg mt-2 px-2">Welcome to my website. My name&apos;s Ant but here I go by sloorjuice..</p>
          <p className="text-base sm:text-lg px-2">I&apos;m super passionate about everything computers, but I love game & software development the most.</p>
        </div>

        <div className="text-center p-5 pb-0">
          <h1 className="text-2xl sm:text-3xl font-bold pt-0"> Recent Blogs</h1>
          <hr className="w-16 mx-auto mt-2 border-t-2 border-black dark:border-white" /> {/*separator */}
        </div>
        <div className="text-center border-2 border-black p-5">
          <p> WEBSITE WORK-IN-PROGRESS </p>
        </div>


        <div className="text-center p-5 w-full">
          <h1 className="text-3xl font-bold"> Some cool art!</h1>
          <hr className="w-42 mx-auto mt-2 border-t-2 border-black dark:border-white" />
          <ImageGallery images={pixelArt} />
        </div>
      </main>
    </>
  );
}
