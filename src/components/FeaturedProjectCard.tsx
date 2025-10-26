import React from 'react';
import Image from 'next/image';

export type Project = {
    title: string;
    description: string;
    date: string;
    image: string;
    tags: string[];
    link?: string;
};

// Helper to shorten the description
function getPreview(text: string, maxLength = 80) {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
}

export default function FeaturedProjectCard({ project }: { project: Project }) {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-3 text-center underline">Featured Project</h1>
            <div className="flex items-center max-w-4xl border-2 border-black rounded-lg shadow-lg bg-purple-200 p-3">
                <div className="flex-shrink-0">
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={64}
                        height={64}
                        className="rounded object-cover border-2 border-gray-300"
                    />
                </div>
                <div className="ml-4 flex-1">
                    <h2 className="text-xl font-bold mb-1">{project.title}</h2>
                    <p className="text-sm mb-2 text-gray-700">{getPreview(project.description, 70)}</p>
                    <div className="flex flex-wrap gap-2 mb-2">
                        {project.tags.map((tag) => (
                            <span key={tag} className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-xs font-semibold">{tag}</span>
                        ))}
                    </div>
                    <div className="text-xs text-gray-500">{project.date}</div>
                    {project.link && (
                        <a
                            href={project.link}
                            className="inline-block mt-2 text-blue-600 hover:underline text-sm"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn More
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}