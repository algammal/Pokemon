

interface PokemonCardProps {
  name: string;
  url: string;
}

const PokemonCard = ({ name, url }: PokemonCardProps) => {
  const id = url?.split("/").filter(Boolean).pop() || "1";
  const paddedId = id.padStart(3, "0");

  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-4 flex flex-col items-center">
      <div className="w-full bg-[#f3f4f7] rounded-lg aspect-auto py-6 flex items-center justify-center mb-4">
        <img src={image} alt={name} className="w-32 h-32 object-contain drop-shadow-md" />
      </div>
      <h3 className="capitalize font-semibold text-gray-900 text-lg">
        {name}
      </h3>
      <span className="text-gray-400 text-sm mt-1 mb-2">#{paddedId}</span>
    </div>
  );
};

export default PokemonCard;