import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function DownloadButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="lg" className="gap-2 text-base font-semibold cursor-pointer">
          Herunterladen
          <ChevronDown className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        <DropdownMenuItem asChild className="cursor-pointer">
          <a
            href="https://apps.apple.com/de/app/bobs-archiv/id6757021642"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3"
          >
            <AppleIcon className="size-5" />
            App Store
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="cursor-pointer">
          <a
            href="https://play.google.com/store/apps/details?id=com.janne6565.bobsarchiv&hl=de"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3"
          >
            <PlayIcon className="size-5" />
            Google Play
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M3 20.5v-17c0-.83.47-1.58 1.2-1.95l.01-.01c.73-.37 1.6-.3 2.27.19L19.7 10.5c.6.44.95 1.14.95 1.88v.24c0 .74-.35 1.44-.95 1.88L6.48 23.27c-.67.49-1.54.56-2.27.19l-.01-.01C3.47 23.08 3 22.33 3 21.5v-1z" />
    </svg>
  );
}
