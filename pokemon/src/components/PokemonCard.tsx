

interface PokemonCardProps {
  name: string;
  url: string;
}

const PokemonCard = ({ name, url }: PokemonCardProps) => {
  const id = url?.split("/").filter(Boolean).pop();

  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div id={id}>
      <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center hover:shadow-lg transition cursor-pointer">
        <img src={image} alt={name} className="w-24 h-24" />

        <h3 className="mt-2 capitalize font-semibold text-lg">
          {name}
        </h3>
      </div>
    </div>
  );
};

export default PokemonCard;