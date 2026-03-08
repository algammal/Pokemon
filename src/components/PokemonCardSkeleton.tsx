const PokemonCardSkeleton = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col items-center animate-pulse">
            <div className="w-full bg-gray-200 rounded-lg h-44 mb-4"></div>
            <div className="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
        </div>
    );
};

export default PokemonCardSkeleton;
