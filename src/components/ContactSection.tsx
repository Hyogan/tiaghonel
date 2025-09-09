const ContactSection = () => {
    return (
        <section id="contact" className="py-24 sm:py-32">
            <div className="container mx-auto max-w-2xl px-6 text-center">
                <h2 className="text-foreground text-3xl font-bold sm:text-4xl">Let's Connect</h2>
                <p className="text-muted-foreground mt-4 text-lg">
                    Whether you have a question, a project idea, or just want to say hello — my inbox is always open.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    {/* Email */}
                    <a
                        href="mailto:john.doe@example.com"
                        className="bg-foreground text-background inline-block rounded-lg px-6 py-3 font-medium shadow-sm transition hover:bg-gray-800"
                    >
                        Email Me
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary border-border hover:bg-muted hover:text-foreground rounded-lg border px-6 py-3 font-medium transition"
                    >
                        GitHub
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary border-border hover:bg-muted hover:text-foreground rounded-lg border px-6 py-3 font-medium transition"
                    >
                        LinkedIn
                    </a>
                </div>

                {/* Optional message or CTA */}
                <p className="text-muted-foreground mt-12 text-sm">
                    Or just drop a message at{' '}
                    <a href="mailto:john.doe@example.com" className="hover:text-primary underline">
                        john.doe@example.com
                    </a>
                </p>
            </div>
        </section>
    );
};

export default ContactSection;
