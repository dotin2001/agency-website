import type { HTMLAttributes, ReactNode } from "react";

type MediaAspectRatio =
  | "square"
  | "portrait"
  | "landscape"
  | "widescreen"
  | "auto";

type MediaFrameProps = HTMLAttributes<HTMLElement> & {
  aspectRatio?: MediaAspectRatio;
  caption?: ReactNode;
  children: ReactNode;
};

const aspectRatioClasses: Record<MediaAspectRatio, string> = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  widescreen: "aspect-video",
  auto: "",
};

function cn(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function MediaFrame({
  aspectRatio = "landscape",
  caption,
  children,
  className,
  ...props
}: Readonly<MediaFrameProps>) {
  return (
    <figure className={cn("grid gap-3", className)} {...props}>
      <div
        className={cn(
          "overflow-hidden rounded-md border border-[var(--color-border-default)] bg-[var(--color-bg-page)]",
          aspectRatioClasses[aspectRatio],
        )}
      >
        {children}
      </div>
      {caption ? (
        <figcaption className="text-sm leading-6 text-[var(--color-text-secondary)]">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
