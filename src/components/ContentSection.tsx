
import React, { useState, useEffect } from 'react';

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

  return (
    <div className="mb-8">
      <div className="text-terminal-blue text-sm mb-4">
        <span className="text-terminal-gray">~/dev/</span>roboticali <span className="text-terminal-gray">&gt;</span> cat {section.toLowerCase()}
      </div>
      <div className="space-y-2">
        {content.slice(0, visibleLines).map((line, index) => (
          <div key={index} className="text-sm leading-relaxed">
            {line}
          </div>
        ))}
        {visibleLines < content.length && (
          <div className="text-terminal-blue animate-blink">▓</div>
        )}
      </div>
    </div>
  );
};

export default ContentSection;
