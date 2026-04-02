import "./Layout.css";
import "./tailwind.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh flex flex-col bg-background text-foreground">
      {children}
    </div>
  );
}
