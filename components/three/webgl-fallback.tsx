export function WebGLFallback() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="absolute right-[-8rem] top-24 h-72 w-72 rotate-12 rounded-md border border-[var(--color-border-default)] opacity-20 sm:right-[-4rem] sm:h-96 sm:w-96" />
    </div>
  );
}
