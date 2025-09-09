const AboutSection = () => {
    return (
        <section id="about" className="py-24 sm:py-32">
            <div className="container mx-auto flex flex-col items-center gap-12 px-6 md:flex-row md:items-start md:gap-20 lg:px-20">
                {/* Profile Image */}
                <div className="bg-surface flex-shrink-0 rounded-2xl p-4 shadow-md">
                    <img
                        src="/profile.jpg" // Replace with your actual profile image
                        alt="John Doe"
                        className="h-64 w-64 rounded-xl object-cover"
                    />
                </div>

                {/* Bio Content */}
                <div className="max-w-2xl">
                    <h2 className="text-foreground text-3xl font-bold sm:text-4xl">About Me</h2>
                    <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
                        I'm John Doe, a frontend engineer with a passion for building fast, accessible, and visually engaging user interfaces. With a
                        strong foundation in JavaScript and a deep love for React and design systems, I specialize in turning complex problems into
                        simple, elegant solutions.
                    </p>
                    <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
                        When I'm not coding, you’ll find me sketching UI ideas, experimenting with motion design, or reading about the latest web
                        standards. I believe in clean code, lifelong learning, and shipping things that matter.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-foreground text-background inline-flex items-center rounded-lg px-6 py-3 text-base font-medium shadow-sm transition hover:bg-gray-800"
                        >
                            View Resume
                        </a>
                        <a href="#contact" className="text-primary font-medium hover:underline">
                            Get in Touch →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
