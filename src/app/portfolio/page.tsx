import Header from "@/components/Header";
import { FaGithub } from "react-icons/fa";
import { SiCurseforge, SiModrinth } from "react-icons/si";

const mcMods = [
	{
		image: "/noonesimmortal.png",
		title: "No One's Immortal",
		desc: "Adds a lives system to Minecraft. Players start with limited lives - run out and become a spectator! See how many Lives you have left in your HUD",
		links: {
			modrinth: "https://modrinth.com/mod/no-ones-immortal",
			curseforge: "https://www.curseforge.com/minecraft/mc-mods/no-ones-immortal",
			source: "https://github.com/sloorjuice/no-ones-immortal-mc-mod",
		},
	},
	{
		image: "/noonehastodie.png",
		title: "No One Has to Die",
		desc: "Adds a complete revive mechanic into Minecraft!",
		links: {
			modrinth: "https://modrinth.com/mod/no-one-has-to-die",
			curseforge: "https://www.curseforge.com/minecraft/mc-mods/no-one-has-to-die",
			source: "https://github.com/sloorjuice/no-one-has-to-die-1.21.5",
		},
	},
];

const games = [
	{
        title: "Nine Lives",
        embed: "https://itch.io/embed/4058172?bg_color=622a5a&fg_color=e0e0fa&link_color=2c48bb&border_color=976d91",
        link: "https://sloorjuice.itch.io/nine-lives",
    },
    {
        title: "Limited Space and Time",
        embed: "https://itch.io/embed/4085850?bg_color=622a5a&fg_color=e0e0fa&link_color=2c48bb&border_color=976d91",
        link: "https://sloorjuice.itch.io/limited-space-and-time",
    },
    {
        title: "Indigo Island",
        embed: "https://itch.io/embed/4136606?bg_color=622a5a&fg_color=e0e0fa&link_color=2c48bb&border_color=976d91",
        link: "https://sloorjuice.itch.io/in",
    }
];

const sectionTitle = "text-2xl font-bold mb-3";
const card =
    "border-2 border-black dark:border-white rounded-lg bg-purple-200 dark:bg-purple-900 hover:bg-purple-300 dark:hover:bg-purple-800 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md";

export default function Portfolio() {
    return (
        <>
            <Header />
            <main className="flex flex-col items-center p-6 gap-12 max-w-6xl mx-auto">
                <section className="w-full">
                    <div className="text-center mb-4">
                        <h2 className="text-3xl font-bold">Minecraft Mods</h2>
                        <hr className="w-48 mx-auto mt-2 border-t-2 border-black dark:border-white" />
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                        {mcMods.map((mod) => (
                            <div key={mod.title} className={card + " flex"}>
                                <div className="w-32 flex-shrink-0 border-r-2 border-black dark:border-white">
                                    <img
                                        src={mod.image}
                                        alt={mod.title}
                                        className="w-full h-full object-contain p-2"
                                    />
                                </div>
                                <div className="p-5 flex flex-col">
                                    <h3 className="font-bold text-xl mb-2">{mod.title}</h3>
                                    <p className="text-sm text-gray-800 dark:text-gray-200 flex-grow mb-4">{mod.desc}</p>
                                    <div className="flex items-center gap-4 mt-auto">
                                        {mod.links.modrinth && (
                                            <a
                                                href={mod.links.modrinth}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                title="Modrinth"
                                                className="text-2xl hover:text-purple-600"
                                            >
                                                <SiModrinth />
                                            </a>
                                        )}
                                        {mod.links.curseforge && (
                                            <a
                                                href={mod.links.curseforge}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                title="CurseForge"
                                                className="text-2xl hover:text-purple-600"
                                            >
                                                <SiCurseforge />
                                            </a>
                                        )}
                                        {mod.links.source && (
                                            <a
                                                href={mod.links.source}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                title="Source Code"
                                                className="text-2xl hover:text-purple-600"
                                            >
                                                <FaGithub />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="w-full">
                    <div className="text-center mb-4">
                        <h2 className="text-3xl font-bold">Games</h2>
                        <hr className="w-24 mx-auto mt-2 border-t-2 border-black dark:border-white" />
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                        {games.map((g) => (
                            <div key={g.title} className={card + " overflow-hidden"}>
                                <iframe
                                    frameBorder="0"
                                    src={g.embed}
                                    className="w-full h-[175px]"
                                    title={g.title}
                                >
                                    <a href={g.link}>Play on itch.io</a>
                                </iframe>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}
