/**
 * Dog image component with loading and error states
 */
export const DogImage = ({ imageUrl, loading, error }) => {
    return (
        <div className="relative aspect-square bg-gradient-to-br from-amber-100/50 to-rose-100/50">
            {loading ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                    <div className="relative">
                        <div className="w-16 h-16 border-4 border-amber-200 rounded-full"></div>
                        <div className="absolute inset-0 w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                    <span className="font-body text-amber-700/80 text-sm font-medium">
                        Haetaan koiraa...
                    </span>
                </div>
            ) : error ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
                    <span className="text-6xl">😿</span>
                    <p className="font-body text-amber-800/70 text-center">
                        {error}
                    </p>
                </div>
            ) : (
                <img
                    src={imageUrl}
                    alt="Satunnainen koira"
                    className="w-full h-full object-contain transition-opacity duration-500"
                    onLoad={(e) => (e.target.style.opacity = "1")}
                    style={{ opacity: 0 }}
                />
            )}
        </div>
    );
};

