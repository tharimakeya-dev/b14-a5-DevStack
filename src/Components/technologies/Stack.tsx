import { toast } from "react-toastify";
import type { Itechnology } from "../../Types/technology";

interface StackProps {
  technologies: Itechnology[];
  selectedIds: string[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const Stack = ({
  technologies,
  selectedIds,
  onRemove,
  onRemoveAll,
}: StackProps) => {
  const selectedTechnologies = technologies.filter((technology) =>
    selectedIds.includes(technology.id),
  );

  return (
    <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900">Your Stack</h2>

      {selectedTechnologies.length === 0 ? (
        <p className="mt-1 text-sm text-slate-500">
          No technologies selected yet.
        </p>
      ) : (
        <p className="mt-1 text-sm text-slate-500">
          {selectedTechnologies.length} technologies selected
        </p>
      )}
      <div className="mt-5 space-y-3">
        {selectedTechnologies.length === 0 ? (
          <p className="rounded-xl bg-slate-50 p-4 text-center text-sm text-slate-500">
            Your Stack is empty.
          </p>
        ) : (
          selectedTechnologies.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center justify-between rounded-xl border border-slate-100 p-3"
            >
              <div className="flex items-center gap-3">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-8 w-8 object-contain"
                />

                <div>
                  <h3 className="font-semibold text-slate-800">
                    {technology.name}
                  </h3>

                  <p className="text-xs text-slate-500">
                    {technology.category}
                  </p>
                </div>
              </div>

              <button
                onClick={() => {
                  onRemove(technology.id);
                  toast.error(`${technology.name} is removed from the stack`);
                }}
                className="text-sm font-medium text-red-500 hover:text-red-700"
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>
      <button
        onClick={() => {
          onRemoveAll();
          toast.error("All technologies are removed from the stack");
        }}
        disabled={selectedTechnologies.length === 0}
        className="btn btn-error mt-5 w-full"
      >
        Remove All
      </button>
    </div>
  );
};

export default Stack;
