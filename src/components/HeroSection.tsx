const HeroSection = () => {
    return (
        <section className="pt-24 sm:pt-32">
            <div className="container mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Main Hero Card (spanning two columns) */}
                <div className="bg-surface/5 border-1 flex flex-col justify-center rounded-2xl border-white/10 p-8 shadow-md backdrop-blur-md md:col-span-2 lg:col-span-2">
                    <h1 className="text-foreground text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                        Building the web, one tile at a time.
                    </h1>
                    <p className="text-muted-foreground mt-4 text-lg">
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
                            className="hover:bg-surface text-muted-foreground inline-flex items-center rounded-lg border border-gray-300 bg-transparent px-6 py-3 text-base font-medium transition-colors duration-300"
                        >
                            Contact
                        </a>
                    </div>
                </div>

                {/* Visual Card (image/SVG/illustration) */}
                <div className="bg-surface hidden items-center justify-center rounded-2xl p-8 lg:flex">
                    <img
                        src="/hero-illustration.svg" // Replace with your actual image or SVG path
                        alt="Web development illustration"
                        className="max-h-64 w-full object-contain"
                    />
                </div>

                {/* Technologies / Skills Card */}
                <div className="bg-surface rounded-2xl p-8 md:col-span-1 lg:col-span-1">
                    <h3 className="text-foreground text-xl font-semibold">Technologies I Use</h3>
                    <ul className="text-muted-foreground mt-4 space-y-2">
                        <li>React</li>
                        <li>Next.js</li>
                        <li>TypeScript</li>
                        <li>Tailwind CSS</li>
                        <li>Node.js</li>
                        <li>Framer Motion</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
