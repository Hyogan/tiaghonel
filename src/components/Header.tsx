import ThemeToggle from './ThemeToggle';

const Header = () => {
    return (
        <header className="max-w-4/5 min-w-1/2 bg-surface mx-auto rounded-full bg-gray-200 py-6 shadow-2xl">
            <div className="container mx-auto flex items-center justify-between px-6">
                <a href="#" className="text-foreground text-2xl font-bold">
                    John Doe
                </a>

                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <a href="#about" className="text-primary font-bold transition-colors duration-300 hover:text-gray-900">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="text-gray-600 transition-colors duration-300 hover:text-gray-900">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="text-gray-600 transition-colors duration-300 hover:text-gray-900">
                                Contact
                            </a>
                        </li>
                        <ThemeToggle />
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
