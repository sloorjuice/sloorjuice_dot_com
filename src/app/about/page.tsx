import Header from "@/components/Header";
import FeaturedProjectCard from "@/components/FeaturedProjectCard";
import Image from "next/image";

export default function About() {
  return (
	<>
	    <Header />
	  
        <main className="flex flex-col items-center p-5 gap-5">
            <div className="text-center max-w-6xl">
                <h1 className="text-3xl font-bold underline">Welcome to all about me!</h1>
                <div className="text-center gap-3"></div>
                    <p className="mt-2">
                        I&apos;m 17 years old and in highschool. I&apos;ve been in a long term relationship for almost 2 years now,
                        and I love her almost as much as I love computers! (Kidding)
                    </p>
                    <p className="mt-2">
                        My Main Hobbie&apos;s Are Programming, Gaming, Listening to music, and Skating, 
                        but I love trying all kinds of things, so I do a lot. My love for computers is definitely fueled by my love for creation.
                        My whole life I&apos;ve always felt a need to create something, I found computers are the perfect outlet for that.
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
                    <Image
                        src="/photo3.jpeg"
                        alt="Left side image 2"
                        width={200}
                        height={250}
                        className="border-2 border-black"
                    />
                </div>

                {/* Main content */}
                <div className="flex-1">
                    <FeaturedProjectCard/>
                    
                    <div className="text-center grid grid-cols-2 gap-2">
                        <div className="text-center border-2 border-black py-3 px-6">
                            <h1 className="pb-4 text-2xl font-bold underline">Skills</h1>
                            <div className="flex items-center justify-center gap-8">
                                <div>
                                    <ul className="flex flex-col space-y-2">
                                        <p>TypeScript</p>
                                        <p>Python</p>
                                        <p>Next.js</p>
                                    </ul>
                                </div>
                                <div>
                                    <ul className="flex flex-col space-y-2">
                                        <p>Expo</p>
                                        <p>Networking </p> 
                                        <p>CyberSecurity</p>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="text-center border-2 border-black py-3 px-6">
                            <h1 className="pb-4 text-2xl font-bold underline">Contacts & Socials</h1>
                            <div className="flex items-center justify-center gap-8">
                                <div>
                                    <p className="font-bold mb-2"> Social Medias: </p>
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
                                    <p className="font-bold mb-2">  Lists: </p>
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
                        <div className="text-center border-2 border-black py-3 px-6">
                            <h1 className="pb-4 text-2xl font-bold underline">Favorites</h1>
                            <div className="flex items-center justify-center gap-16">
                                <div>
                                    <p className="font-bold"> Game: </p>
                                    <div className="flex flex-col space-y-2 mb-4">
                                        <p>Terraria</p>
                                    </div>
                                    <p className="font-bold"> TV Show: </p>
                                    <div className="flex flex-col space-y-2">
                                        <p>Better Caul Saul</p>
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
                        <div className="text-center border-2 border-black py-3 px-8">
                            <h1 className="pb-4 text-2xl font-bold underline">Hobbies</h1>
                            <div className="flex items-center justify-center gap-8">
                                <div>
                                    <ul className="flex flex-col space-y-2">
                                        <p>Skateboarding</p>
                                        <p>Gaming</p>
                                        <p>Cartoons</p>
                                    </ul>
                                </div>
                                <div>
                                    <ul className="flex flex-col space-y-2">
                                        <p>Software Development</p>
                                        <p>Home Labbing</p>
                                        <p>Photography</p>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right side photo */}
                <div className="hidden lg:flex flex-col gap-4 mx-4">
                    <Image
                        src="/photo7.jpeg"
                        alt="Left side image 1"
                        width={200}
                        height={250}
                        className="border-2 border-black"
                    />
                    <Image
                        src="/photo4.jpeg"
                        alt="Left side image 2"
                        width={200}
                        height={250}
                        className="border-2 border-black"
                    />
                </div>
            </div>
	  </main>
	</>
  );
}
