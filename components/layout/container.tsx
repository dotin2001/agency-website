import type { HTMLAttributes, ReactNode } from "react";

type ContainerSize = "page" | "content" | "reading" | "wide" | "full";
type ContainerElement =
  | "div"
  | "main"
  | "section"
  | "article"
  | "aside"
  | "header"
  | "footer";

type ContainerProps = HTMLAttributes<HTMLElement> & {
  as?: ContainerElement;
  children: ReactNode;
  size?: ContainerSize;
};

const sizeClasses: Record<ContainerSize, string> = {
  page: "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
  content: "mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8",
  reading: "mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8",
  wide: "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
  full: "w-full",
};

function cn(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Container({
  as: Component = "div",
  children,
  className,
  size = "content",
  ...props
}: Readonly<ContainerProps>) {
  return (
    <Component className={cn(sizeClasses[size], className)} {...props}>
      {children}
    </Component>
  );
}
