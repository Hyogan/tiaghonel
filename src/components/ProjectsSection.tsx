const ProjectsSection = () => {
    const projects = [
        {
            title: 'Portfolio Website',
            description: 'A personal portfolio built with Next.js and Tailwind CSS showcasing projects and blogs.',
            tech: ['Next.js', 'Tailwind', 'TypeScript'],
            link: '#',
        },
        {
            title: 'E-commerce Dashboard',
            description: 'A real-time admin dashboard for managing orders, products, and analytics.',
            tech: ['React', 'Chart.js', 'Node.js'],
            link: '#',
        },
        {
            title: 'Design System',
            description: 'Reusable component library built with Storybook and Tailwind CSS.',
            tech: ['Storybook', 'Tailwind', 'React'],
            link: '#',
        },
    ];

    return (
        <section id="projects" className="">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-12 text-center">
                    <h2 className="text-foreground text-3xl font-bold sm:text-4xl">Featured Projects</h2>
                    <p className="text-muted-foreground mx-auto mt-4 max-w-2xl">
                        A selection of projects that showcase my experience in frontend development, UI design, and scalable architecture.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="bg-surface border-border rounded-2xl border p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
                        >
                            <h3 className="text-foreground text-2xl font-semibold">{project.title}</h3>
                            <p className="text-muted-foreground mt-2">{project.description}</p>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {project.tech.map((tech, index) => (
                                    <span key={index} className="bg-muted text-muted-foreground rounded-md px-2 py-1 text-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <a href={project.link} className="text-primary mt-6 inline-block font-medium hover:underline">
                                View Project →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
