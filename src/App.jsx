import { useState, useEffect } from "react";
import { fetchRandomDog } from "./services/dogApi";
import { getBreedFromUrl } from "./utils/breedUtils";
import { BackgroundDecorations } from "./components/BackgroundDecorations";
import { Header } from "./components/Header";
import { DogCard } from "./components/DogCard";
import { Footer } from "./components/Footer";

function App() {
    const [dogImage, setDogImage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleFetchRandomDog = async () => {
        setLoading(true);
        setError(null);
        const result = await fetchRandomDog();
        if (result.success) {
            setDogImage(result.imageUrl);
        } else {
            setError(result.error);
        }
        setLoading(false);
    };

    useEffect(() => {
        let cancelled = false;
        (async () => {
            const result = await fetchRandomDog();
            if (!cancelled) {
                if (result.success) {
                    setDogImage(result.imageUrl);
                } else {
                    setError(result.error);
                }
                setLoading(false);
            }
        })();
        return () => {
            cancelled = true;
        };
    }, []);

    const breed = getBreedFromUrl(dogImage);

    return (
        <div className="min-h-screen bg-linear-to-br from-amber-50 via-orange-50 to-rose-100 relative overflow-hidden">
            <BackgroundDecorations />

            <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
                <Header />

                <DogCard
                    imageUrl={dogImage}
                    breed={breed}
                    loading={loading}
                    error={error}
                    onFetchRandomDog={handleFetchRandomDog}
                />

                <Footer />
            </div>
        </div>
    );
}

export default App;
