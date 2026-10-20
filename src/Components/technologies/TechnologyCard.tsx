import type { Itechnology } from "../../Types/technology";

interface TechnologyCardProps {
  technology: Itechnology;
  isSelected: boolean;
  onToggle: (id: string) => void;
}

const TechnologyCard = ({
  technology,
  isSelected,
  onToggle,
}: TechnologyCardProps) => {
  console.log(technology.name, isSelected);
  return (
    <div
      className="
        group
        rounded-2xl
        border border-slate-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      {/* Top section */}
      <div className="flex items-start justify-between">
        {/* Technology Icon */}
        <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-slate-50">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-10 w-10 object-contain"
          />
        </div>

        {/* Badge */}
        <span
          className="
            rounded-full
            border border-emerald-200
            bg-emerald-50
            px-4
            py-1.5
            text-sm
            font-medium
            text-emerald-600
          "
        >
          {technology.badge}
        </span>
      </div>

      {/* Content */}
      <div className="mt-6">
        <h2 className="text-2xl font-bold text-slate-900">{technology.name}</h2>

        <p className="mt-2 min-h-13 text-sm leading-6 text-slate-500">
          {technology.description}
        </p>
      </div>

      {/* Divider */}
      <div className="my-5 border-t border-slate-100"></div>

      {/* Bottom information */}
      <div className="flex items-center justify-between">
        {/* Category */}
        <span className="rounded-md bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-600">
          {technology.category}
        </span>

        {/* Difficulty */}
        <span className="text-[10px] font-semibold text-slate-500">
          {technology.difficulty}
        </span>

        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <span className="text-lg text-yellow-400">★</span>

          <span className="font-semibold text-slate-700">
            {technology.rating}
          </span>
        </div>
      </div>

      {/* Button */}

      <button
        onClick={() => onToggle(technology.id)}
        className={`
    mt-5
    w-full
    rounded-xl
    py-3
    font-medium
    text-white
    transition
    duration-300
    ${
      isSelected
        ? "cursor-not-allowed bg-[#DB2777]"
        : "bg-slate-950 hover:bg-slate-800 active:scale-[0.98]"
    }
  `}
      >
        {isSelected ? " 🗸 Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;
