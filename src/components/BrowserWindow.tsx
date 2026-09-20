import { useEffect, useState } from "react";
import { ExternalLink, Lock } from "lucide-react";

interface BrowserWindowProps {
  embedUrl: string;
  rawUrl: string;
  display: string;
}

export default function BrowserWindow({ embedUrl, rawUrl, display }: BrowserWindowProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setLoaded(false);
    setFailed(false);
    const t = setTimeout(() => setFailed((f) => (!f ? true : f)), 8000);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [embedUrl]);

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-2 px-3 py-1.5 border-b border-border/40 bg-muted/20">
        <Lock className="w-3 h-3 text-muted-foreground flex-shrink-0" />
        <span className="font-mono text-[11px] text-muted-foreground truncate flex-1">{display}</span>
        <a
          href={rawUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="open in new tab"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
      <div className="relative flex-1 bg-background">
        {!loaded && !failed && (
          <div className="absolute inset-0 flex items-center justify-center font-mono text-xs text-muted-foreground animate-pulse">
            loading…
          </div>
        )}
        {failed && !loaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
            <p className="font-mono text-xs text-muted-foreground">⚠ this site refuses to appear inside a window.</p>
            <a
              href={rawUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-icon underline underline-offset-4 text-sm"
            >
              open in a new tab instead →
            </a>
          </div>
        )}
        <iframe
          key={embedUrl}
          src={embedUrl}
          title={display}
          className="absolute inset-0 w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={() => setLoaded(true)}
        />
      </div>
    </div>
  );
}
