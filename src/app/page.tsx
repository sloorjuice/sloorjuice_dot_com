import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      
      <main className="flex flex-col min-h-screen items-center p-5 gap-5">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Hello, Internet!</h1>
          <hr className="w-48 mx-auto mt-2 border-t-2 border-black" /> {/*separator */}
          <p className="text-lg mt-2">Welcome to my website. My name&apos;s Ant but here I go by sloorjuice..</p>
          <p className="text-lg mx-120">I&apos;m super passionate about everything computers, but I love game & software development the most.</p>
        </div>

        <div className="text-center p-5">
          <h1 className="text-3xl font-bold"> Recent Blogs</h1>
          <hr className="w-16 mx-auto mt-2 border-t-2 border-black" /> {/*separator */}
        </div>

        <div className="text-center border-2 border-black p-5">
          <p> WEBSITE WORK-IN-PROGRESS </p>
        </div>


      </main>
    </>
  );
}
