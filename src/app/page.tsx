import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      
      <main className="flex flex-col min-h-screen items-center p-5 gap-5">
        <div className="text-center">
          <h1 className="text-3xl font-bold underline">Hello, Internet!</h1>
          <p className="mt-2">Welcome to my website. My name&apos;s Ant but here I go by sloorjuice..</p>
        </div>

        <div className="text-center border-2 border-black p-5">
          <p> Image Here </p>
        </div>

      </main>
    </>
  );
}
