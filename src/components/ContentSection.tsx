
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
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const hasUrl = urlRegex.test(line);
    
    if (hasUrl) {
      const parts = line.split(urlRegex);
      return (
        <div key={index} className="text-sm leading-relaxed">
          {parts.map((part, partIndex) => {
            if (urlRegex.test(part)) {
              // This is a URL - get the text before it for the link text
              const textBefore = parts[partIndex - 1] || '';
              const linkText = textBefore.trim() || part;
              
              return (
                <a
                  key={partIndex}
                  href={part}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-terminal-blue hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  {linkText}
                  <ExternalLink size={12} />
                </a>
              );
            } else if (partIndex < parts.length - 1 && urlRegex.test(parts[partIndex + 1])) {
              // This text is followed by a URL, so don't render it separately
              return null;
            } else {
              // Regular text that's not associated with a URL
              return part ? <span key={partIndex}>{part}</span> : null;
            }
          })}
        </div>
      );
    } else {
      return (
        <div key={index} className="text-sm leading-relaxed">
          {line}
        </div>
      );
    }
  };

  return (
    <div className="mb-8">
      <div className="text-terminal-blue text-sm mb-4 font-mono">
        <span className="text-terminal-gray">~/</span>roboticali <span className="text-terminal-gray">&gt;</span> {section.toLowerCase()}
      </div>
      <div className="space-y-2 font-mono">
        {content.slice(0, visibleLines).map((line, index) => renderLine(line, index))}
        {visibleLines < content.length && (
          <div className="text-terminal-blue animate-blink">▓</div>
        )}
      </div>
    </div>
  );
};

export default ContentSection;
