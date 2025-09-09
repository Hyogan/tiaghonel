import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="border-border bg-surface text-muted-foreground border-t">
            <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 py-8 sm:flex-row">
                {/* Left: Name or Brand */}
                <p className="text-sm">&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>

                {/* Right: Social Icons */}
                <div className="flex gap-4 text-lg">
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground transition"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground transition"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                    <a href="mailto:john.doe@example.com" className="hover:text-foreground transition" aria-label="Email">
                        <FaEnvelope />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
