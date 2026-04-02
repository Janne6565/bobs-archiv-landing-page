import iconUrl from "../assets/icon.png";
import { DownloadButton } from "./DownloadButton";
import { ScreenshotShowcase } from "./ScreenshotShowcase";

export function HeroSection() {
  return (
    <section className="flex-1 flex items-center">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-2">
        {/* Left column */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left animate-in fade-in duration-700">
          <img
            src={iconUrl}
            alt="Bobs Archiv"
            className="mb-6 h-24 w-24 rounded-[22%] [box-shadow:0_3px_20px_rgba(82,180,230,0.25),0_4px_12px_rgba(82,180,230,0.15)]"
          />
          <h1 className="mb-3 text-4xl font-bold tracking-tight md:text-5xl">
            Bobs Archiv
          </h1>
          <p className="mb-4 text-xl text-primary font-medium">
            Dein Archiv für Die drei Fragezeichen
          </p>
          <p className="mb-8 max-w-md text-muted-foreground leading-relaxed">
            Entdecke alle Folgen, verfolge deinen Hörfortschritt und öffne
            Episoden direkt auf Spotify, Apple Music oder Deezer.
          </p>
          <DownloadButton />
        </div>

        {/* Right column */}
        <div className="animate-in fade-in duration-700 delay-150">
          <ScreenshotShowcase />
        </div>
      </div>
    </section>
  );
}
