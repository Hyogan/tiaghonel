const Projects = () => {
    const projects = [
        {
            title: 'Portfolio Website',
            description: 'A sleek personal portfolio built with Next.js, Tailwind, and MDX.',
            image: '/projects/portfolio.png', // Replace with your images
            github: 'https://github.com/yourusername/portfolio',
            demo: 'https://your-portfolio.com',
            tech: ['Next.js', 'Tailwind CSS', 'TypeScript'],
        },
        {
            title: 'E-Commerce Dashboard',
            description: 'Admin dashboard with analytics, order management, and inventory control.',
            image: '/projects/dashboard.png',
            github: 'https://github.com/yourusername/dashboard',
            demo: 'https://dashboard-demo.com',
            tech: ['React', 'Chart.js', 'Express'],
        },
        {
            title: 'Design System',
            description: 'A component library built with Storybook and Tailwind for scalable UI design.',
            image: '/projects/design-system.png',
            github: 'https://github.com/yourusername/design-system',
            demo: '',
            tech: ['Storybook', 'Tailwind', 'React'],
        },
    ];

    return (
        <section id="projects" className="py-24 sm:py-32">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-12 text-center">
                    <h2 className="text-foreground text-3xl font-bold sm:text-4xl">Projects Gallery</h2>
                    <p className="text-muted-foreground mx-auto mt-4 max-w-2xl">
                        A showcase of some selected projects I’ve built recently — from production apps to UI libraries.
                    </p>
                </div>

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="bg-surface border-border group relative overflow-hidden rounded-2xl border shadow-md transition-shadow duration-300 hover:shadow-lg"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="h-52 w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                            />

                            <div className="p-6">
                                <h3 className="text-foreground text-xl font-semibold">{project.title}</h3>
                                <p className="text-muted-foreground mt-2 text-sm">{project.description}</p>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.tech.map((tech, index) => (
                                        <span key={index} className="bg-muted text-muted-foreground rounded-md px-2 py-1 text-xs">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-6 flex space-x-4">
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary text-sm font-medium hover:underline"
                                        >
                                            Live Demo →
                                        </a>
                                    )}
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-muted-foreground text-sm hover:underline"
                                        >
                                            GitHub
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
