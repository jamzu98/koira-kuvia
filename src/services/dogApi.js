/**
 * Service for interacting with the Dog CEO API
 */

const DOG_API_BASE_URL = "https://dog.ceo/api/breeds/image/random";

/**
 * Fetches a random dog image from the Dog CEO API
 * @returns {Promise<{success: boolean, imageUrl: string | null, error: string | null}>}
 */
export const fetchRandomDog = async () => {
    try {
        const response = await fetch(DOG_API_BASE_URL);
        const data = await response.json();
        
        if (data.status === "success") {
            return {
                success: true,
                imageUrl: data.message,
                error: null,
            };
        } else {
            return {
                success: false,
                imageUrl: null,
                error: "Kuvan hakeminen epäonnistui",
            };
        }
    } catch (err) {
        return {
            success: false,
            imageUrl: null,
            error: "Verkkovirhe: Yritä uudelleen",
        };
    }
};

