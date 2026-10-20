import { use, useState } from "react";

import type { Itechnology } from "../../Types/technology";

import TechnologyCard from "./TechnologyCard";
import Stack from "./Stack";
import { toast } from "react-toastify";

interface TechnologyProps {
  technologiesPromise: Promise<Itechnology[]>;
}

const Technologies = ({ technologiesPromise }: TechnologyProps) => {
  const technologies = use(technologiesPromise);

  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  // Add or remove technology
  const handleToggle = (id: string) => {
    const technology = technologies.find((t) => t.id === id);
    if (!technology) return;

    if (selectedIds.includes(id)) {
      toast.info(`${technology.name} is already added in your stack.`);
      return;
    }

    setSelectedIds([...selectedIds, id]);
    toast.success(`${technology.name} is added to the stack.`);
  };

  // Remove technology from stack
  const handleRemove = (id: string) => {
    setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
  };
  //RemoveAll technology from stack
  const handleRemoveAll = () => {
    setSelectedIds([]);
  };

  return (
    <section className="container mx-auto">
      {/* Technologies + Stack */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Technology Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:col-span-9 xl:grid-cols-3">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              isSelected={selectedIds.includes(technology.id)}
              onToggle={handleToggle}
            />
          ))}
        </div>

        {/* Your Stack */}
        <div className="lg:col-span-3">
          <Stack
            technologies={technologies}
            selectedIds={selectedIds}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </div>
    </section>
  );
};

export default Technologies;
