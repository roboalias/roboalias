
import React, { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';

interface ContentSectionProps {
  section: string;
  content: string[];
}

const ContentSection: React.FC<ContentSectionProps> = ({ section, content }) => {
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    setVisibleLines(0);
    const timer = setInterval(() => {
      setVisibleLines(prev => {
        if (prev < content.length) {
          return prev + 1;
        } else {
          clearInterval(timer);
          return prev;
        }
      });
    }, 150);

    return () => clearInterval(timer);
  }, [section, content.length]);

  const renderLine = (line: string, index: number) => {
    // Check if line contains a URL
    const urlRegex = /(https?:\/\/[^\s]+)/;
    const match = line.match(urlRegex);
    
    if (match) {
      // Extract the text before the URL and the URL itself
      const url = match[0];
      const textBeforeUrl = line.substring(0, line.indexOf(url)).trim();
      
      // If there's text before the URL, make it clickable
      if (textBeforeUrl) {
        return (
          <div key={index} className="text-sm leading-relaxed">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-terminal-blue inline-flex items-center gap-1 cursor-pointer"
            >
              {textBeforeUrl}
              <ExternalLink size={12} />
            </a>
          </div>
        );
      } else {
        // If the line is just a URL, don't render it (it will be used for the previous line)
        return null;
      }
    } else {
      // Check if the next line is a URL
      const nextLine = content[index + 1];
      const nextLineMatch = nextLine?.match(urlRegex);
      
      // Don't hyperlink if the line contains "Stealth" (to exclude stealth startup)
      if (nextLineMatch && line.trim() !== '' && !line.toLowerCase().includes('stealth')) {
        // This line should be hyperlinked to the URL on the next line
        const url = nextLineMatch[0];
        return (
          <div key={index} className="text-sm leading-relaxed">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-terminal-blue inline-flex items-center gap-1 cursor-pointer"
            >
              {line}
              <ExternalLink size={12} />
            </a>
          </div>
        );
      } else {
        // Regular text line without URL
        return (
          <div key={index} className="text-sm leading-relaxed">
            {line}
          </div>
        );
      }
    }
  };

  return (
    <div className="mb-8">
      <div className="space-y-2 font-mono">
        {content.slice(0, visibleLines).map((line, index) => renderLine(line, index)).filter(Boolean)}
        {visibleLines < content.length && (
          <div className="text-terminal-blue animate-blink">▓</div>
        )}
      </div>
    </div>
  );
};

export default ContentSection;
