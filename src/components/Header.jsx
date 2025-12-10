/**
 * Header component with title and description
 */
export const Header = () => {
    return (
        <header className="text-center mb-8 animate-[fadeIn_0.6s_ease-out]">
            <div className="inline-flex items-center gap-3 mb-4">
                <span className="text-5xl">🐕</span>
                <h1 className="font-display text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-600 via-orange-500 to-rose-500 bg-clip-text text-transparent">
                    Koirakuvia
                </h1>
            </div>
            <p className="font-body text-lg text-amber-800/70 max-w-md mx-auto">
                koiria
            </p>
        </header>
    );
};

