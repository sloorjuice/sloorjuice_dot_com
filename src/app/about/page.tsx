import Header from "@/components/Header";
import FeaturedProjectCard from "@/components/FeaturedProjectCard";
import Image from "next/image";
import fs from 'fs';
import matter from 'gray-matter';
import type { Project } from "@/components/FeaturedProjectCard"; // Import the type

export default function About() {
  const filePath = 'src/database/projects/jukebox.md';
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(fileContent);

  // Cast data to Project type
  const project = data as Project;

  return (
	<>
	    <Header />
	  
        <main className="flex flex-col items-center p-5 gap-5">
            <div className="text-center max-w-6xl">
                <h1 className="text-3xl font-bold underline">Welcome to all about me!</h1>
                <div className="text-center gap-3"></div>
                    <p className="mt-2">
                        I&apos;m 18 years old and currently in High School. I&apos;ve been in a long term relationship for over 2 years now,
                        and I love her almost as much as I love computers! (Kidding)
                    </p>
                    <p className="mt-2">
                        My Main Hobbie&apos;s Are Programming, Gaming, Music Creation and Listening, Pixel Art, and Skating, 
                        but I love trying all kinds of things, so I do a lot. My main passion is just Creation. 
                        I love to create, build, problem solve, entertain, and I wanna make peoples lives better!
                        My whole life I&apos;ve always felt a need to create something, I found a lot of good outlets for that.
                    </p>		
                    <p className="mt-2">
                        I wanna create a lot of things with my friends. Short Films, Clothing, General Content, Games, etc.
                    </p>
                </div>

                <div className="flex items-start gap-4 max-w-7xl w-full">
                {/* Left side photo */}
                <div className="hidden lg:flex flex-col gap-4 mx-4">
                    <Image
                        src="/photo.jpeg"
                        alt="Left side image 1"
                        width={200}
                        height={250}
                        className="border-2 border-black"
                    />
                    <div className="border-2 border-black overflow-hidden w-[200px] h-[250px]">
                        <Image
                            src="/noglasses.jpeg"
                            alt="Left side image 2"
                            width={200}
                            height={250}
                            className="scale-125" // Adjust 125 (125%) to your liking
                        />
                    </div>
                </div>

                {/* Main content */}
                <div className="flex-1 flex flex-col gap-2">
                    {/*
                    <div className="justify-center">
                        <FeaturedProjectCard project={project}/>
                    </div>
                    */}
                    
                    <div className="text-center grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="text-center border-2 border-black py-3 px-6 bg-purple-200 dark:bg-purple-900">
                            <h1 className="pb-4 text-2xl font-bold underline">Skills</h1>
                            <div className="flex items-center justify-center gap-8">
                                {/*Make skills clickable to reveal a modal about how I can utilize this skill and some projects that show it off.*/}
                                <div>
                                    <ul className="flex flex-col space-y-2">
                                        <p>Python</p>
                                        <p>Typescript</p>
                                        <p>Next.js</p>
                                        <p>Expo</p>
                                        <p>API&apos;s</p>
                                        <p>Music Composition</p>
                                    </ul>
                                </div>
                                <div>
                                    <ul className="flex flex-col space-y-2">
                                        <p>Self-Hosting</p>
                                        <p>Networking </p> 
                                        <p>CyberSecurity</p>
                                        <p>Linux</p>
                                        <p>Git</p>
                                        <p>Aseprite</p>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="text-center border-2 border-black py-3 px-8 bg-purple-200 dark:bg-purple-900">
                            <h1 className="pb-4 text-2xl font-bold underline">Hobbies</h1>
                            <div className="flex items-center justify-center gap-8">
                                <div>
                                    <ul className="flex flex-col space-y-2">
                                        <p>Skateboarding</p>
                                        <p>Gaming</p>
                                        <p>Movies & TV</p>
                                        <p>Music</p>
                                        <p>Writing</p>
                                    </ul>
                                </div>
                                <div>
                                    <ul className="flex flex-col space-y-2">
                                        <p>Software Development</p>
                                        <p>Home Labbing</p>
                                        <p>Game Dev</p>
                                        <p>Pixel Art</p>
                                        <p>Photography</p>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="text-center border-2 border-black py-3 px-6 bg-purple-200 dark:bg-purple-900">
                            <h1 className="pb-1 text-2xl font-bold underline">Contacts & Socials</h1>
                            <div className="pb-1 flex justify-center gap-6">
                                <a href="mailto:antant8085@gmail.com">
                                    <h1 className="pb-2 text-sm font-bold underline">antant8085@gmail.com</h1>
                                </a>
                                <a href="Tel: +1-814-431-2013">
                                    <h1 className="pb-2 text-sm font-bold underline">(814) 431-2013</h1>
                                </a>
                            </div>
                            <div className="flex items-center justify-center gap-8">
                                <div>
                                    <p className="font-bold"> Social Medias: </p>
                                    <ul className="flex flex-col space-y-2">
                                        <li>
                                            <a href="https://x.com/sloorjuice" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/in/anthonyreynolds07/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/sloorjuice" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-bold">  Lists: </p>
                                    <ul className="flex flex-col space-y-2">
                                        <li>
                                            <a href="https://www.ign.com/playlist/sloorjuice" target="_blank" rel="noopener noreferrer" className="hover:underline">IGN Playlist</a>
                                        </li>
                                        <li>
                                            <a href="https://myanimelist.net/animelist/Sloorjuice" target="_blank" rel="noopener noreferrer" className="hover:underline">My Anime List</a>
                                        </li>
                                        <li>
                                            <a href="https://letterboxd.com/sloorjuice/" target="_blank" rel="noopener noreferrer" className="hover:underline">LetterBoxd</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="text-center border-2 border-black py-3 px-6 bg-purple-200 dark:bg-purple-900">
                            <h1 className="pb-4 text-2xl font-bold underline">Favorites</h1>
                            <div className="flex items-center justify-center gap-16">
                                <div>
                                    <p className="font-bold"> Game: </p>
                                    <div className="flex flex-col space-y-2 mb-4">
                                        <p>Terraria</p>
                                    </div>
                                    <p className="font-bold"> TV Show: </p>
                                    <div className="flex flex-col space-y-2">
                                        <p>The Boys</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="font-bold"> Cartoon: </p>
                                    <div className="flex flex-col space-y-2 mb-4">
                                        <p>Regular Show</p>
                                    </div>
                                    <p className="font-bold"> Movie: </p>
                                    <div className="flex flex-col space-y-2">
                                        <p>Mid90&apos;s</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right side photo */}
                <div className="hidden lg:flex flex-col gap-4 mx-4">
                    <Image
                        src="/photo3.jpeg"
                        alt="Left side image 1"
                        width={200}
                        height={250}
                        className="border-2 border-black"
                    />
                    <div className="border-2 border-black overflow-hidden w-[200px] h-[255px]">
                        <Image
                            src="/newglasses.jpeg"
                            alt="Left side image 2"
                            width={200}
                            height={600} // Set this much higher than the container height
                            className="max-w-none -translate-y-[50px]" 
                        />
                    </div>
                </div>
            </div>
	  </main>
	</>
  );
}
