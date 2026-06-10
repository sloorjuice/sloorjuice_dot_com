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
            <div className="flex items-center justify-center gap-4 max-w-9xl w-full">
                {/* Left side photo */}
                <div className="hidden lg:flex flex-col gap-4 mx-4">
                    <Image
                        src="/graduation_picture.jpeg"
                        alt="Left side image 1"
                        width={275}
                        height={300}
                        className="border-2 border-black"
                    />
                    <Image
                        src="/stripped_shirt_selfie.jpeg"
                        alt="Left side image 2"
                        width={275}
                        height={300}
                        className="border-2 border-black"
                    />
                </div>

                {/* Main content */}
                <div className="flex-1 flex flex-col gap-2">
                    {/*
                    <div className="justify-center">
                        <FeaturedProjectCard project={project}/>
                    </div>
                    */}

                    <div className="mx-auto text-center max-w-4xl">
                    <h1 className="text-3xl font-bold underline">Welcome to all about me!</h1>
                    <div className="text-center gap-3"></div>
                        <p className="mt-2">
                            Hello, my name is Anthony. Currently as of June 2026, I am 18 years old and recently graduated from High School.
                            Lately I've been putting my time towards learning and building my skills. Since I've been about 14 I've been teaching myself Coding.
                            In High School I received an Advanced Certification for Computer Programming through their Career and Technical Education Program (CTE).
                            I was in Skills USA for Computer Programming and got 2nd place in the district.
                        </p>
                        <p className="mt-2">
                            My current big goal is to get a good job in computer science. I'm most interested in Mobile Development.
                            I'm currently learning iOS Development with SwiftUI, I also want to learn Kotlin for Android development.
                            Not only do I want to put my skills towards a job but I also want to create my own mobile app for Skateboarders.
                            I wanna create an app that gives Skaters tools to improve and solve other problems as well as a platform to meet other skaters.
                        </p>
                    </div>
                    
                    <div className="flex justify-center gap-5">
                        <div className="w-fit text-center border-2 border-black py-3 px-8 bg-purple-200 dark:bg-purple-900">
                            <h1 className="pb-4 text-2xl font-bold underline">Hobbies</h1>
                            <div className="flex items-center justify-center gap-8">
                                <div>
                                    <ul className="flex flex-col space-y-2">
                                        <p>Skateboarding</p>
                                        <p>Fashion</p>
                                        <p>Reading</p>
                                        <p>Writing</p>
                                        <p>Music</p>

                                    </ul>
                                </div>
                                <div>
                                    <ul className="flex flex-col space-y-2">
                                        <p>Programming</p>
                                        <p>Home Labbing</p>
                                        <p>Cooking</p>
                                        <p>Drawing</p>
                                        <p>2D Animation</p>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="w-fit text-center border-2 border-black py-3 px-6 bg-purple-200 dark:bg-purple-900">
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
                    <div className="mx-auto w-fit text-center border-2 border-black py-3 px-6 bg-purple-200 dark:bg-purple-900">
                        <h1 className="pb-1 text-2xl font-bold underline">Contacts & Socials</h1>

                        <div className="pb-1 flex justify-center gap-6">
                            <a href="mailto:antant8085@gmail.com">
                                <h1 className="pb-2 text-sm font-bold underline">
                                    antant8085@gmail.com
                                </h1>
                            </a>
                            <a href="Tel: +1-814-431-2013">
                                <h1 className="pb-2 text-sm font-bold underline">
                                    (814) 431-2013
                                </h1>
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
                </div>

                {/* Right side photo */}
                <div className="hidden lg:flex flex-col gap-4 mx-4">
                    <Image
                        src="/photo3.jpeg"
                        alt="Left side image 1"
                        width={275}
                        height={300}
                        className="border-2 border-black"
                    />
                    <Image
                        src="/outside_selfie.jpeg"
                        alt="Left side image 2"
                        width={275}
                        height={300}
                        className="border-2 border-black"
                    />
                </div>

            </div>
	  </main>
	</>
  );
}
