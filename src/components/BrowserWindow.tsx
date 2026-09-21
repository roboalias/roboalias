import { useEffect, useRef, useState } from "react";
import { ExternalLink, Lock } from "lucide-react";
import { hostAllowsFraming } from "@/lib/embed";

interface BrowserWindowProps {
  embedUrl: string;
  rawUrl: string;
  display: string;
}

export default function BrowserWindow({ embedUrl, rawUrl, display }: BrowserWindowProps) {
  const allow = hostAllowsFraming(embedUrl);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(!allow);
  const [hovered, setHovered] = useState(false);
  const loadedRef = useRef(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const ok = hostAllowsFraming(embedUrl);
    loadedRef.current = false;
    setLoaded(false);
    setFailed(!ok);
    if (!ok) return;
    const t = window.setTimeout(() => {
      if (!loadedRef.current) setFailed(true);
    }, 10000);
    return () => window.clearTimeout(t);
  }, [embedUrl]);

  const handleLoad = () => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    try {
      const href = iframe.contentWindow?.location.href ?? "about:blank";
      if (href === "about:blank" || href === "about:srcdoc") return;
    } catch {
      // cross-origin document is present, so the site actually framed
    }
    loadedRef.current = true;
    setLoaded(true);
  };

  const showFrame = allow && !failed;

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
      <div
        className="relative flex-1 bg-background"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {showFrame && loaded && (
          <div className={`absolute inset-0 z-10 ${hovered ? "pointer-events-none" : ""}`} />
        )}
        {showFrame && !loaded && (
          <div className="absolute inset-0 z-20 flex items-center justify-center font-mono text-xs text-muted-foreground animate-pulse bg-background">
            loading…
          </div>
        )}
        {failed && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 p-6 text-center bg-background">
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
        {showFrame && (
          <iframe
            ref={iframeRef}
            key={embedUrl}
            src={embedUrl}
            title={display}
            className="absolute inset-0 w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={handleLoad}
            onError={() => setFailed(true)}
          />
        )}
      </div>
    </div>
  );
}
