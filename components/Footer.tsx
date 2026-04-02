export function Footer() {
  return (
    <footer className="border-t border-border py-6 text-center text-sm text-muted-foreground">
      Powered by{" "}
      <a
        href="https://www.ddfdb.de"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline"
      >
        ddfdb.de
      </a>{" "}
      &amp;{" "}
      <a
        href="https://dreimetadaten.de"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline"
      >
        dreimetadaten.de
      </a>
    </footer>
  );
}
