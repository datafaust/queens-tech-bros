import Image from "next/image";

const TeamMemberCard = ({ name, title, accolades, description, image }) => {
  return (
    <div className="border border-amber-600 bg-slate-800 rounded-lg max-w-lg p-10">
      <div className="flex flex-col items-center text-center">
        <div className="relative w-40 h-40 rounded-full overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <h2 className="text-lg font-semibold text-white">{name}</h2>
        <p className="text-md text-gray-400">{title}</p>
        <p className="text-sm text-gray-500 italic whitespace-pre-line text-left mb-2">{accolades}</p>
        <p className="text-md text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
