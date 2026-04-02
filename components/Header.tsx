import iconUrl from "../assets/icon.png";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-6 py-3">
        <img
          src={iconUrl}
          alt="Bobs Archiv"
          className="h-8 w-8 rounded-[22%]"
        />
        <span className="text-lg font-semibold tracking-tight">
          Bobs Archiv
        </span>
      </div>
    </header>
  );
}
