'use client';
import { FaArrowUp } from 'react-icons/fa';

const BackToTopButton = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={scrollToTop}
            className="bg-foreground text-background fixed bottom-6 right-6 z-50 rounded-full p-3 shadow-md transition hover:bg-gray-800"
            aria-label="Back to top"
        >
            <FaArrowUp className="h-4 w-4" />
        </button>
    );
};

export default BackToTopButton;
