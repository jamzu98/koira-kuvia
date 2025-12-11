/**
 * Breed badge component to display the dog breed
 */
export const BreedBadge = ({ breed }) => {
    if (!breed) return null;

    return (
        <div className="flex items-center justify-center gap-2 animate-[fadeIn_0.4s_ease-out]">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-amber-100 to-orange-100 rounded-full">
                <span className="text-lg">🏷️</span>
                <span className="font-body text-sm font-medium text-amber-800 capitalize">
                    {breed}
                </span>
            </span>
        </div>
    );
};
