import { DogImage } from "./DogImage";
import { BreedBadge } from "./BreedBadge";
import { FetchButton } from "./FetchButton";

/**
 * Main card component containing the dog image, breed badge, and fetch button
 */
export const DogCard = ({
    imageUrl,
    breed,
    loading,
    error,
    onFetchRandomDog,
}) => {
    return (
        <main className="w-full max-w-lg animate-[slideUp_0.5s_ease-out_0.2s_both]">
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl shadow-amber-900/10 border border-white/50 overflow-hidden">
                <DogImage imageUrl={imageUrl} loading={loading} error={error} />

                <div className="p-6 space-y-5">
                    {breed && !loading && !error && <BreedBadge breed={breed} />}

                    <FetchButton onClick={onFetchRandomDog} loading={loading} />
                </div>
            </div>
        </main>
    );
};

