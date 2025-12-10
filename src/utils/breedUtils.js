/**
 * Utility functions for extracting breed information from URLs
 */

/**
 * Extracts the breed name from a Dog CEO API image URL
 * @param {string} url - The image URL from the Dog CEO API
 * @returns {string} The breed name, or empty string if not found
 */
export const getBreedFromUrl = (url) => {
    if (!url) return "";
    const parts = url.split("/");
    const breedIndex = parts.indexOf("breeds") + 1;
    if (breedIndex > 0 && parts[breedIndex]) {
        return parts[breedIndex].replace("-", " ");
    }
    return "";
};

