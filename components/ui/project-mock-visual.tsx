import type { CSSProperties, ReactNode } from "react";
import type { ProjectSlug } from "@/lib/content/projects";

type MockVisualMode = "card" | "gallery";
type MockVisualAspect = "wide" | "landscape" | "portrait" | "widescreen";

type ProjectMockVisualProps = Readonly<{
  aspect?: MockVisualAspect;
  index?: number;
  mode?: MockVisualMode;
  projectSlug: ProjectSlug;
}>;

type VisualLayerProps = Readonly<{
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}>;

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

function VisualLayer({ children, className, style }: VisualLayerProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("absolute rounded-[0.35rem]", className)}
      style={style}
    >
      {children}
    </div>
  );
}

function BrowserFrame({ compact = false }: Readonly<{ compact?: boolean }>) {
  return (
    <div className="absolute inset-x-[10%] top-[10%] h-[52%] rounded-[0.5rem] border border-[var(--color-border-default)] bg-[var(--color-bg-page)] shadow-[0_0_0_1px_rgba(10,16,26,0.02)]">
      <div className="flex items-center gap-1 border-b border-[var(--color-border-default)] px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-[var(--color-text-secondary)]/30" />
        <span className="h-2 w-2 rounded-full bg-[var(--color-brand-primary)]/50" />
        <span className="h-2 w-2 rounded-full bg-[var(--color-text-secondary)]/20" />
        {!compact ? (
          <span className="ml-3 h-2 w-20 rounded-full bg-[var(--color-border-default)]" />
        ) : null}
      </div>
      <div className="grid gap-2 px-3 py-3">
        <div className="h-3 w-1/3 rounded-full bg-[var(--color-text-primary)]/10" />
        <div className="grid grid-cols-[1.25fr_minmax(0,0.75fr)] gap-2">
          <div className="h-24 rounded-[0.35rem] border border-[var(--color-border-default)] bg-[var(--color-text-primary)]/4" />
          <div className="grid gap-2">
            <div className="h-10 rounded-[0.35rem] bg-[var(--color-brand-primary)]/18" />
            <div className="h-12 rounded-[0.35rem] border border-[var(--color-border-default)] bg-[var(--color-bg-page)]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function DeviceFrame() {
  return (
    <div className="absolute bottom-[8%] right-[9%] h-[56%] w-[26%] rounded-[1.2rem] border border-[var(--color-text-primary)]/15 bg-[var(--color-bg-page)] p-2 shadow-[0_12px_24px_rgba(10,16,26,0.08)]">
      <div className="h-full rounded-[0.9rem] border border-[var(--color-border-default)] bg-[var(--color-bg-page)]">
        <div className="mx-auto mt-2 h-1.5 w-10 rounded-full bg-[var(--color-text-primary)]/12" />
        <div className="grid gap-2 px-2 py-3">
          <div className="h-16 rounded-[0.55rem] bg-[var(--color-brand-primary)]/18" />
          <div className="h-2.5 w-2/3 rounded-full bg-[var(--color-text-primary)]/10" />
          <div className="grid gap-1.5">
            <div className="h-9 rounded-[0.45rem] border border-[var(--color-border-default)] bg-[var(--color-bg-page)]" />
            <div className="h-9 rounded-[0.45rem] border border-[var(--color-border-default)] bg-[var(--color-bg-page)]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardBars() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-[14%] h-[72%] w-[72%]"
      viewBox="0 0 100 100"
    >
      <path
        d="M8 78H92"
        fill="none"
        stroke="var(--color-border-default)"
        strokeWidth="2"
      />
      <path
        d="M16 68L30 52L45 58L62 34L80 22"
        fill="none"
        stroke="var(--color-brand-primary)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="15"
        y="58"
        width="10"
        height="20"
        rx="2"
        fill="var(--color-text-primary)"
        opacity="0.08"
      />
      <rect
        x="33"
        y="46"
        width="10"
        height="32"
        rx="2"
        fill="var(--color-brand-primary)"
        opacity="0.22"
      />
      <rect
        x="51"
        y="38"
        width="10"
        height="40"
        rx="2"
        fill="var(--color-text-primary)"
        opacity="0.1"
      />
      <rect
        x="69"
        y="28"
        width="10"
        height="50"
        rx="2"
        fill="var(--color-brand-primary)"
        opacity="0.32"
      />
    </svg>
  );
}

function SocialTile({ className }: Readonly<{ className?: string }>) {
  return (
    <div
      className={cn(
        "rounded-[0.45rem] border border-[var(--color-border-default)] bg-[var(--color-bg-page)] p-2",
        className,
      )}
    >
      <div className="h-16 rounded-[0.3rem] bg-[var(--color-brand-primary)]/16" />
      <div className="mt-2 grid gap-1.5">
        <div className="h-2.5 w-2/3 rounded-full bg-[var(--color-text-primary)]/10" />
        <div className="h-2.5 w-1/2 rounded-full bg-[var(--color-text-primary)]/8" />
      </div>
    </div>
  );
}

function IdentityBoard() {
  return (
    <>
      <VisualLayer
        className="left-[8%] top-[10%] h-[32%] w-[34%] border border-[var(--color-border-default)] bg-[var(--color-bg-page)] p-3"
      >
        <div className="grid h-full grid-cols-2 gap-2">
          <div className="rounded-[0.35rem] border border-[var(--color-border-default)] bg-[var(--color-brand-primary)]/18" />
          <div className="rounded-[0.35rem] border border-[var(--color-border-default)] bg-[var(--color-bg-page)]" />
          <div className="rounded-[0.35rem] border border-[var(--color-border-default)] bg-[var(--color-text-primary)]/6" />
          <div className="rounded-[0.35rem] border border-[var(--color-border-default)] bg-[var(--color-brand-primary)]/10" />
        </div>
      </VisualLayer>
      <VisualLayer
        className="left-[24%] top-[48%] h-[38%] w-[24%] border border-[var(--color-border-default)] bg-[var(--color-bg-page)]"
      >
        <div className="h-[22%] border-b border-[var(--color-border-default)] bg-[var(--color-text-primary)]/4" />
        <div className="grid h-[78%] place-items-center">
          <div className="h-14 w-14 rounded-[0.45rem] border border-[var(--color-brand-primary)]" />
        </div>
      </VisualLayer>
      <VisualLayer
        className="right-[10%] top-[16%] h-[60%] w-[34%] border border-[var(--color-border-default)] bg-[var(--color-bg-page)] p-4"
      >
        <div className="grid h-full grid-rows-[0.85fr_minmax(0,1fr)] gap-3">
          <div className="rounded-[0.55rem] bg-[var(--color-brand-primary)]/18" />
          <div className="grid grid-cols-3 gap-2">
            <div className="rounded-[0.35rem] border border-[var(--color-border-default)] bg-[var(--color-bg-page)]" />
            <div className="rounded-[0.35rem] border border-[var(--color-border-default)] bg-[var(--color-text-primary)]/6" />
            <div className="rounded-[0.35rem] border border-[var(--color-border-default)] bg-[var(--color-bg-page)]" />
          </div>
        </div>
      </VisualLayer>
    </>
  );
}

function CampaignBoard() {
  return (
    <>
      <VisualLayer className="left-[7%] top-[14%] h-[54%] w-[40%] border border-[var(--color-border-default)] bg-[var(--color-bg-page)] p-3">
        <div className="grid h-full grid-cols-2 gap-2">
          <SocialTile />
          <SocialTile className="translate-y-5" />
          <SocialTile className="-translate-y-2" />
          <SocialTile />
        </div>
      </VisualLayer>
      <VisualLayer className="right-[9%] top-[12%] h-[42%] w-[34%] border border-[var(--color-border-default)] bg-[var(--color-brand-primary)]/16 p-3">
        <div className="flex h-full flex-col justify-between rounded-[0.45rem] border border-[var(--color-brand-primary)]/60 p-3">
          <div className="h-3 w-1/2 rounded-full bg-[var(--color-text-primary)]/12" />
          <div className="h-14 rounded-[0.45rem] bg-[var(--color-bg-page)]/80" />
          <div className="h-3 w-1/3 rounded-full bg-[var(--color-text-primary)]/10" />
        </div>
      </VisualLayer>
      <VisualLayer className="right-[14%] bottom-[10%] h-[28%] w-[42%] border border-[var(--color-border-default)] bg-[var(--color-bg-page)] p-3">
        <div className="grid h-full grid-cols-[0.55fr_minmax(0,1fr)_0.55fr] gap-2">
          <div className="rounded-[0.35rem] bg-[var(--color-text-primary)]/5" />
          <div className="rounded-[0.35rem] bg-[var(--color-brand-primary)]/20" />
          <div className="rounded-[0.35rem] bg-[var(--color-text-primary)]/5" />
        </div>
      </VisualLayer>
    </>
  );
}

function DigitalExperienceBoard() {
  return (
    <>
      <BrowserFrame />
      <DeviceFrame />
      <VisualLayer
        className="left-[8%] bottom-[10%] h-[20%] w-[34%] border border-[var(--color-border-default)] bg-[var(--color-bg-page)] p-3"
      >
        <div className="grid h-full grid-cols-3 gap-2">
          <div className="rounded-[0.35rem] bg-[var(--color-text-primary)]/5" />
          <div className="rounded-[0.35rem] bg-[var(--color-brand-primary)]/18" />
          <div className="rounded-[0.35rem] bg-[var(--color-text-primary)]/5" />
        </div>
      </VisualLayer>
    </>
  );
}

function ProductLaunchBoard() {
  return (
    <>
      <VisualLayer
        className="left-[8%] top-[18%] h-[56%] w-[36%] border border-[var(--color-border-default)] bg-[var(--color-bg-page)]"
      >
        <div className="absolute bottom-[12%] left-[12%] right-[12%] h-[16%] rounded-full bg-[var(--color-text-primary)]/6" />
        <div className="absolute left-[28%] top-[24%] h-[42%] w-[44%] rounded-[1.1rem_1.1rem_0.6rem_0.6rem] border border-[var(--color-brand-primary)] bg-[var(--color-brand-primary)]/18" />
        <div className="absolute left-[38%] top-[18%] h-[12%] w-[24%] rounded-[0.4rem] border border-[var(--color-border-default)] bg-[var(--color-bg-page)]" />
      </VisualLayer>
      <VisualLayer
        className="right-[11%] top-[12%] h-[28%] w-[30%] border border-[var(--color-border-default)] bg-[var(--color-brand-primary)]/14 p-3"
      >
        <div className="grid h-full grid-rows-[1fr_auto] gap-2 rounded-[0.45rem] border border-[var(--color-brand-primary)]/50 p-3">
          <div className="rounded-[0.35rem] bg-[var(--color-bg-page)]/80" />
          <div className="h-3 w-2/3 rounded-full bg-[var(--color-text-primary)]/12" />
        </div>
      </VisualLayer>
      <VisualLayer
        className="right-[8%] bottom-[10%] h-[34%] w-[36%] border border-[var(--color-border-default)] bg-[var(--color-bg-page)] p-3"
      >
        <div className="grid h-full grid-cols-2 gap-2">
          <div className="rounded-[0.35rem] bg-[var(--color-brand-primary)]/16" />
          <div className="grid gap-2">
            <div className="h-full rounded-[0.35rem] bg-[var(--color-text-primary)]/5" />
            <div className="h-10 rounded-[0.35rem] border border-[var(--color-border-default)] bg-[var(--color-bg-page)]" />
          </div>
        </div>
      </VisualLayer>
    </>
  );
}

function ContentEcosystemBoard() {
  return (
    <>
      <VisualLayer
        className="left-[10%] top-[14%] h-[56%] w-[30%] border border-[var(--color-border-default)] bg-[var(--color-bg-page)] p-3"
      >
        <div className="grid h-full gap-2">
          <div className="h-[30%] rounded-[0.45rem] bg-[var(--color-brand-primary)]/18" />
          <div className="grid flex-1 gap-2">
            <div className="rounded-[0.35rem] border border-[var(--color-border-default)] bg-[var(--color-bg-page)]" />
            <div className="rounded-[0.35rem] border border-[var(--color-border-default)] bg-[var(--color-text-primary)]/5" />
            <div className="rounded-[0.35rem] border border-[var(--color-border-default)] bg-[var(--color-bg-page)]" />
          </div>
        </div>
      </VisualLayer>
      <svg
        aria-hidden="true"
        className="absolute inset-[18%] h-[64%] w-[64%]"
        viewBox="0 0 100 100"
      >
        <path
          d="M24 20L51 34L76 22M24 50L51 34M76 50L51 34M24 80L24 50M76 80L76 50M24 80L51 64L76 80"
          fill="none"
          opacity="0.7"
          stroke="var(--color-border-default)"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="24" cy="20" r="5" fill="var(--color-brand-primary)" opacity="0.75" />
        <circle cx="51" cy="34" r="6" fill="var(--color-text-primary)" opacity="0.12" />
        <circle cx="76" cy="22" r="5" fill="var(--color-brand-primary)" opacity="0.55" />
        <circle cx="24" cy="50" r="5" fill="var(--color-text-primary)" opacity="0.1" />
        <circle cx="76" cy="50" r="5" fill="var(--color-text-primary)" opacity="0.1" />
        <circle cx="24" cy="80" r="5" fill="var(--color-brand-primary)" opacity="0.6" />
        <circle cx="51" cy="64" r="5" fill="var(--color-text-primary)" opacity="0.12" />
        <circle cx="76" cy="80" r="5" fill="var(--color-brand-primary)" opacity="0.72" />
      </svg>
      <VisualLayer className="right-[8%] top-[16%] h-[48%] w-[26%] border border-[var(--color-border-default)] bg-[var(--color-bg-page)] p-3">
        <div className="grid h-full gap-2">
          <div className="h-8 rounded-[0.35rem] bg-[var(--color-text-primary)]/5" />
          <div className="h-8 rounded-[0.35rem] bg-[var(--color-brand-primary)]/18" />
          <div className="h-8 rounded-[0.35rem] bg-[var(--color-bg-page)] border border-[var(--color-border-default)]" />
          <div className="h-8 rounded-[0.35rem] bg-[var(--color-text-primary)]/5" />
        </div>
      </VisualLayer>
    </>
  );
}

function PerformancePlatformBoard() {
  return (
    <>
      <VisualLayer className="left-[8%] top-[12%] h-[24%] w-[30%] border border-[var(--color-border-default)] bg-[var(--color-bg-page)] p-3">
        <div className="grid h-full grid-cols-2 gap-2">
          <div className="rounded-[0.45rem] bg-[var(--color-brand-primary)]/18 p-2">
            <div className="h-2.5 w-2/3 rounded-full bg-[var(--color-text-primary)]/10" />
            <div className="mt-3 h-6 w-1/2 rounded-full bg-[var(--color-bg-page)]/80" />
          </div>
          <div className="rounded-[0.45rem] border border-[var(--color-border-default)] bg-[var(--color-bg-page)] p-2">
            <div className="h-2.5 w-1/2 rounded-full bg-[var(--color-text-primary)]/10" />
            <div className="mt-3 h-6 w-2/3 rounded-full bg-[var(--color-text-primary)]/6" />
          </div>
        </div>
      </VisualLayer>
      <VisualLayer className="left-[8%] top-[42%] h-[40%] w-[52%] border border-[var(--color-border-default)] bg-[var(--color-bg-page)]">
        <DashboardBars />
      </VisualLayer>
      <VisualLayer className="right-[8%] top-[18%] h-[56%] w-[24%] border border-[var(--color-border-default)] bg-[var(--color-bg-page)] p-3">
        <div className="grid h-full gap-2">
          <div className="h-12 rounded-[0.45rem] bg-[var(--color-brand-primary)]/18" />
          <div className="h-12 rounded-[0.45rem] bg-[var(--color-text-primary)]/5" />
          <div className="h-20 rounded-[0.45rem] border border-[var(--color-border-default)] bg-[var(--color-bg-page)]" />
          <div className="grid flex-1 grid-cols-3 items-end gap-1">
            <div className="h-8 rounded-t-[0.35rem] bg-[var(--color-text-primary)]/8" />
            <div className="h-14 rounded-t-[0.35rem] bg-[var(--color-brand-primary)]/24" />
            <div className="h-10 rounded-t-[0.35rem] bg-[var(--color-text-primary)]/8" />
          </div>
        </div>
      </VisualLayer>
    </>
  );
}

function renderProjectVisual(projectSlug: ProjectSlug) {
  switch (projectSlug) {
    case "brand-transformation":
      return <IdentityBoard />;
    case "integrated-campaign":
      return <CampaignBoard />;
    case "digital-experience":
      return <DigitalExperienceBoard />;
    case "product-launch":
      return <ProductLaunchBoard />;
    case "content-ecosystem":
      return <ContentEcosystemBoard />;
    case "performance-platform":
      return <PerformancePlatformBoard />;
  }
}

export function ProjectMockVisual({
  aspect = "landscape",
  index = 0,
  mode = "gallery",
  projectSlug,
}: ProjectMockVisualProps) {
  const isPortrait = aspect === "portrait";
  const isWide = aspect === "wide" || aspect === "widescreen";
  const isCard = mode === "card";
  const isGallery = mode === "gallery";

  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative h-full w-full overflow-hidden bg-[var(--color-bg-page)]",
        isCard ? "motion-interactive motion-safe:group-hover:scale-[1.01]" : undefined,
      )}
    >
      <div className="absolute inset-0 bg-[var(--color-text-primary)]/[0.025]" />
      {isGallery ? (
        <div className="absolute inset-[2.5%] rounded-[0.8rem] border border-[var(--color-border-default)]/75 bg-[var(--color-text-primary)]/[0.015]" />
      ) : null}
      <div
        className={cn(
          "absolute inset-[4%] rounded-[0.55rem] border border-[var(--color-border-default)]",
          isWide ? "inset-y-[7%]" : undefined,
          isPortrait ? "inset-x-[8%]" : undefined,
        )}
      />
      <div
        className={cn(
          "absolute inset-[9%]",
          isCard ? "scale-[0.98]" : undefined,
          isPortrait ? "inset-x-[10%] inset-y-[8%]" : undefined,
          isWide ? "inset-y-[10%]" : undefined,
          index % 2 === 1 ? "translate-y-[1%]" : undefined,
        )}
      >
        {renderProjectVisual(projectSlug)}
      </div>
      <div
        className={cn(
          "absolute left-[8%] top-[8%] h-px bg-[var(--color-brand-primary)]/70",
          isGallery ? "w-[34%]" : "w-[28%]",
        )}
      />
      <div
        className={cn(
          "absolute bottom-[8%] right-[8%] rounded-[0.45rem] border border-[var(--color-brand-primary)]/70",
          isGallery ? "h-10 w-10" : "h-9 w-9",
        )}
      />
    </div>
  );
}
