import type { HTMLAttributes, ReactNode } from "react";

const CONTAINER_CLASSES = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export default function Container({
  className = "",
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={`${CONTAINER_CLASSES}${className ? ` ${className}` : ""}`}
      {...props}
    >
      {children}
    </div>
  );
}
