import Header from "@/components/Header";
import ImageGallery from "@/components/ImageGallery";

type BlogPost = {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  link: string;
  date: string;
};

async function getRecentPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch(
      'https://theroyalscode.com/students/a_reynolds/wp-json/wp/v2/posts?per_page=3&_embed',
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );
    
    if (!response.ok) {
      return [];
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export default async function Home() {
  const recentPosts = await getRecentPosts();
  
  const pixelArt = [
    { src: "/borger.png", alt: "Borger", title: "Borger!"},
    { src: "/cheeborger.png", alt: "CheeBorger", title: "CheeBorger!"},
    { src: "/alien.gif", alt: "Alien Guy", title: "Cool Alien Character" },
    { src: "/me_idle.gif", alt: "Celeste Inspired Sprite", title: "Celeste inspired Character"},
    { src: "/me_run.gif", alt: "Pixel art 3", title: "Celeste inspired Character" },
    { src: "/orb.gif", alt: "Pixel art 3", title: "Cool Glowing Orb" },
    { src: "/yellowguy_walk.gif", alt: "Pixel art 3", title: "Cool lil' Slug Guy" },
    { src: "/yarn.gif", alt: "Yarn Ball", title: "Yarn Ball!"},
    { src: "/KittySoul.gif", alt: "Kitty Soul", title: "Kitty Soul (Made for a game I was working on)"},
    { src: "/CelestedInspriedBackground.png", alt: "Pixel art 2", title: "SPOOKY SCARY" },
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
          <hr className="w-16 mx-auto mt-2 border-t-2 border-black dark:border-white" />
        </div>
        
        <div className="w-full max-w-4xl px-4">
          {recentPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {recentPosts.map((post) => (
                <a
                  key={post.id}
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-black dark:border-white rounded-lg p-4 bg-purple-200 dark:bg-purple-900 hover:bg-purple-300 dark:hover:bg-purple-800 transition-colors"
                >
                  <h3 
                    className="font-bold text-lg mb-2"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                  <div 
                    className="text-sm line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  />
                  <p className="text-xs mt-2 text-gray-600 dark:text-gray-300">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </a>
              ))}
            </div>
          ) : (
            <div className="text-center border-2 border-black dark:border-white p-5 bg-purple-100 dark:bg-purple-900">
              <p>No blog posts available at the moment.</p>
            </div>
          )}
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
