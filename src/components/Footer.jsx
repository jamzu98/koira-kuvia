/**
 * Footer component with API attribution
 */
export const Footer = () => {
    return (
        <footer className="mt-8 text-center animate-[fadeIn_0.6s_ease-out_0.4s_both]">
            <p className="font-body text-sm text-amber-700/50">
                Kuvat:{" "}
                <a
                    href="https://dog.ceo/dog-api/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-dotted hover:text-amber-600 transition-colors"
                >
                    Dog CEO API
                </a>
            </p>
        </footer>
    );
};

