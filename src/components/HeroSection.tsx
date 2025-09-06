const HeroSection = () => {
    return (
        <section className="py-24 sm:py-32">
            <div className="container mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Main Hero Card (spanning two columns) */}
                <div className="bg-surface flex flex-col justify-center rounded-2xl p-8 md:col-span-2 lg:col-span-2">
                    <h1 className="text-foreground text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                        Building the web, one tile at a time.
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Hi, I'm John Doe, a frontend engineer passionate about clean code and beautiful user experiences.
                    </p>
                    <div className="mt-8 flex space-x-4">
                        <a
                            href="#projects"
                            className="bg-foreground text-background inline-flex items-center rounded-lg border border-transparent px-6 py-3 text-base font-medium shadow-sm transition-all duration-300 hover:bg-gray-800"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="hover:bg-surface inline-flex items-center rounded-lg border border-gray-300 bg-transparent px-6 py-3 text-base font-medium text-gray-700 transition-colors duration-300"
                        >
                            Contact
                        </a>
                    </div>
                </div>

                {/* Secondary Visual Card */}
                <div className="bg-surface hidden items-center justify-center rounded-2xl p-8 lg:flex">
                    {/* Placeholder for an image, SVG, or other visual */}
                </div>

                {/* Third "Grid" Cell for Skills */}
                <div className="bg-surface rounded-2xl p-8 md:col-span-1 lg:col-span-1">
                    <h3 className="text-xl font-semibold text-gray-900">Technologies I Use</h3>
                    <ul className="mt-4 space-y-2">
                        <li>
                            <span className="font-medium text-gray-600">React</span>
                        </li>
                        <li>
                            <span className="font-medium text-gray-600">Next.js</span>
                        </li>
                        <li>
                            <span className="font-medium text-gray-600">TypeScript</span>
                        </li>
                        <li>
                            <span className="font-medium text-gray-600">Tailwind CSS</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
