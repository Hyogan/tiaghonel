import AboutSection from '@/components/AboutSection';
import BackToTopButton from '@/components/BackToTopButton';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Projects from '@/components/Projects';
import ProjectsSection from '@/components/ProjectsSection';

export default function Home() {
    return (
        <div className="bg-background relative flex min-h-screen flex-col pt-4">
            <Header />

            {/* TOP Overlay: behind main content, below header */}
            <div
                className="h-280 pointer-events-none absolute left-0 right-0 top-[72px] bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:62px_60px]"
                style={{
                    maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 70%, transparent 110%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 70%, transparent 110%)',
                }}
            />

            <main className="relative z-10 w-full flex-grow px-6 md:px-12 lg:px-24 xl:px-60">
                <HeroSection />
                <ProjectsSection />
                <Projects />
                <AboutSection />
                <ContactSection />
            </main>

            {/* BOTTOM Overlay: behind main content, at bottom of page */}
            <div
                className="h-150 pointer-events-none absolute bottom-0 left-0 right-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:62px_60px]"
                style={{
                    maskImage: 'radial-gradient(ellipse 80% 60% at 50% 100%, black 70%, transparent 110%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 100%, black 70%, transparent 110%)',
                }}
            />

            <BackToTopButton />
            <Footer />
        </div>
    );
}
