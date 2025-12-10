/**
 * Button component for fetching a new random dog
 */
export const FetchButton = ({ onClick, loading }) => {
    return (
        <button
            onClick={onClick}
            disabled={loading}
            className="group w-full relative overflow-hidden bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white font-display font-semibold text-lg py-4 px-8 rounded-2xl shadow-lg shadow-orange-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/30 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
            <span className="relative z-10 flex items-center justify-center gap-3">
                <svg
                    className={`w-6 h-6 transition-transform duration-300 ${
                        loading
                            ? "animate-spin"
                            : "group-hover:rotate-180"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                </svg>
                {loading ? "Ladataan..." : "Satunnainen koira"}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
    );
};

