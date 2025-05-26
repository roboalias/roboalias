
import React, { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import Gallery from './Gallery';

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

  // Special handling for gallery section
  if (section === 'gallery') {
    return (
      <div className="mb-8">
        <div className="space-y-4 font-mono mb-6">
          {content.slice(0, visibleLines).map((line, index) => (
            <div key={index} className="text-sm leading-relaxed">
              {line.trim() === '' ? '\u00A0' : line}
            </div>
          ))}
          {visibleLines < content.length && (
            <div className="text-terminal-blue animate-blink">▓</div>
          )}
        </div>
        {visibleLines >= content.length && <Gallery />}
      </div>
    );
  }

  const isHeading = (line: string) => {
    const headings = ['Treatise', 'Articles', 'Patents', 'Preprints', 'Interviews', 'Appearances', 'Features', 'Founded', 'Backed'];
    return headings.includes(line.trim());
  };

  const isImage = (line: string) => {
    return line.startsWith('/lovable-uploads/') && (line.endsWith('.png') || line.endsWith('.jpg') || line.endsWith('.jpeg'));
  };

  const renderLine = (line: string, index: number) => {
    // Handle empty lines by rendering them with proper spacing
    if (line.trim() === '') {
      return (
        <div key={index} className="text-sm leading-relaxed">
          &nbsp;
        </div>
      );
    }

    // Handle images
    if (isImage(line)) {
      return (
        <div key={index} className="my-4">
          <img 
            src={line} 
            alt="Systema Robotica book cover" 
            className="max-w-xs h-auto rounded-lg shadow-md"
          />
        </div>
      );
    }

    if (isHeading(line)) {
      return (
        <div key={index} className="text-base font-bold text-gray-400 leading-relaxed mt-4 mb-2">
          {line}
        </div>
      );
    }

    const urlRegex = /(https?:\/\/[^\s]+)/;
    const match = line.match(urlRegex);
    
    if (match) {
      const url = match[0];
      const textBeforeUrl = line.substring(0, line.indexOf(url)).trim();
      
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
        return null;
      }
    } else {
      const nextLine = content[index + 1];
      const nextLineMatch = nextLine?.match(urlRegex);
      
      if (nextLineMatch && line.trim() !== '' && !line.toLowerCase().includes('stealth')) {
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
