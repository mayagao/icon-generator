"use client";

type IconCircleProps = {
  Icon: React.ComponentType<{ size: number; className?: string }>;
  bgColor: string;
  fgColor?: string;
  size?: "small" | "medium" | "large" | "xlarge";
};

export default function IconCircle({
  Icon,
  bgColor,
  fgColor = "white",
  size = "large",
}: IconCircleProps) {
  const sizeMap = {
    small: {
      dimensions: "w-5 h-5",
      padding: "p-1",
      iconSize: 12,
    },
    medium: {
      dimensions: "w-8 h-8",
      padding: "p-2",
      iconSize: 16,
    },
    large: {
      dimensions: "w-12 h-12",
      padding: "p-4",
      iconSize: 24,
    },
    xlarge: {
      dimensions: "w-12 h-12",
      padding: "p-3",
      iconSize: 24,
    },
  };

  const { dimensions, padding, iconSize } = sizeMap[size];

  return (
    <div
      className={`${dimensions} ${padding} rounded-full flex items-center justify-center`}
      style={{
        backgroundColor: bgColor,
        color: fgColor,
      }}
    >
      <Icon size={iconSize} />
    </div>
  );
}
