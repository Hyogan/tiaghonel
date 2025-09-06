import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';

export default function Home() {
    return (
        <div className="bg-background flex h-full min-h-screen w-full flex-col pt-4">
            <Header />
            <div className="relative h-full w-full">
                <div className="absolute -top-4 bottom-0 left-0 right-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:62px_60px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_110%)]"></div>
                <div className="flex h-full min-h-screen w-full flex-col gap-4 px-60 pt-4">
                    <HeroSection />
                </div>
            </div>
        </div>
    );
}
