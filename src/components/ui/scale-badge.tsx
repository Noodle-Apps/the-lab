// components/ScaleBadge.tsx
export const scaleMap = {
  Dormant: {
    bg: "bg-gray-600",
    tooltip: "This is a dormant project that I haven't worked on in a while.",
  },
  Simmering: {
    bg: "bg-yellow-600",
    tooltip: "This project is in the works but not actively being worked on.",
  },
  Boiling: {
    bg: "bg-orange-600",
    tooltip: "This project is actively being worked on.",
  },
  Overdrive: {
    bg: "bg-red-600",
    tooltip: "This project has my full attention and is in high gear.",
  },
  Complete: {
    bg: "bg-green-600",
    tooltip: "This project is complete and no longer being worked on.",
  },
} as const;

export type ScaleType = keyof typeof scaleMap;

export const ScaleBadge = ({ type }: { type: ScaleType }) => {
  const { bg, tooltip } = scaleMap[type];
  return (
    <span
      title={tooltip}
      className={`${bg} text-white px-3 py-1 font-bold uppercase text-sm mondrian-border cursor-pointer`}
    >
      {type}
    </span>
  );
};
