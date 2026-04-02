import discoverUrl from "../assets/screenshots/discover.png";
import streamingUrl from "../assets/screenshots/streaming.png";
import historyUrl from "../assets/screenshots/history.png";

export function ScreenshotShowcase() {
    return (
        <div className="relative flex items-center justify-center py-8">
            {/* Left */}
            <img
                src={historyUrl}
                alt="Hörfortschritt"
                className="hidden md:block absolute left-0 z-10 w-52 -rotate-6 rounded-2xl shadow-2xl border border-border"
            />
            {/* Center */}
            <img
                src={discoverUrl}
                alt="Folgen entdecken"
                className="relative z-20 w-60 md:w-64 rounded-2xl shadow-2xl border border-border"
            />
            {/* Right */}
            <img
                src={streamingUrl}
                alt="Streaming-Dienst wählen"
                className="hidden md:block absolute right-0 z-10 w-52 rotate-6 rounded-2xl shadow-2xl border border-border"
            />
        </div>
    );
}
