import Header from "@/components/Header";

export default function Home() {
  return (
	<>
	  <Header />
	  
	  <main className="flex flex-col min-h-screen items-center p-5 gap-5">
		<div className="text-center">
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

		<div className="text-center border-2 border-black p-5">
		  <p> Image Here </p>
		</div>
		
		<div className="text-center flex gap-2">
			<div className="text-center border-2 border-black p-5">
				<p> Image Here </p>
			</div>
			<div className="text-center border-2 border-black p-5">
				<div className="gap-0 pb-4">
					<p className="font-bold"> Social Medias: </p>
					<ul className="flex flex-col">
						<p>Twitter</p>
						<p>linkdin</p>
						<p>Instagram</p>
					</ul>
				</div>
				<div className="gap-0 pb-4">
					<p className="font-bold">  Lists: </p>
					<ul className="flex flex-col">
						<p>IGN Playlist</p>
						<p>My Anime List</p>
						<p>LetterBoxd</p>
					</ul>
				</div>
			</div>
			<div className="text-center border-2 border-black p-5">
				<p> Image Here </p>
			</div>
		</div>
	  </main>
	</>
  );
}
