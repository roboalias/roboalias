
import React, { useState, useEffect } from 'react';
import TypewriterText from './TypewriterText';

interface ContentSectionProps {
  section: string;
  content: string[];
}

const ContentSection: React.FC<ContentSectionProps> = ({ section, content }) => {
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    setVisibleLines(0);
  }, [section]);

  const handleLineComplete = () => {
    setVisibleLines(prev => prev + 1);
  };

  return (
    <div className="mb-8">
      <div className="text-terminal-blue text-sm mb-4">
        <span className="text-terminal-gray">~/dev/</span>roboticali <span className="text-terminal-gray">&gt;</span> cat {section.toLowerCase()}
      </div>
      <div className="space-y-2">
        {content.map((line, index) => (
          <div key={index} className="text-sm leading-relaxed">
            {index <= visibleLines ? (
              <TypewriterText
                text={line}
                delay={index * 100}
                speed={30}
                onComplete={index === visibleLines ? handleLineComplete : undefined}
              />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentSection;
