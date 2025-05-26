
import React, { useEffect, useState } from 'react';

interface NavigationMenuProps {
  sections: string[];
  activeSection: string | null;
  onSectionClick: (section: string) => void;
  isVisible: boolean;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ 
  sections, 
  activeSection, 
  onSectionClick, 
  isVisible 
}) => {
  const [visibleSections, setVisibleSections] = useState<number>(0);

  useEffect(() => {
    if (isVisible) {
      setVisibleSections(0);
      const timer = setInterval(() => {
        setVisibleSections(prev => {
          if (prev < sections.length) {
            return prev + 1;
          } else {
            clearInterval(timer);
            return prev;
          }
        });
      }, 100);

      return () => clearInterval(timer);
    }
  }, [isVisible, sections.length]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="mb-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 font-mono">
        {sections.slice(0, visibleSections).map((section, index) => (
          <button
            key={section}
            onClick={() => onSectionClick(section)}
            className="text-left text-sm hover:text-terminal-blue transition-colors duration-200 cursor-pointer text-foreground"
          >
            {section}
          </button>
        ))}
        {visibleSections < sections.length && (
          <div className="text-terminal-blue animate-blink">▓</div>
        )}
      </div>
    </div>
  );
};

export default NavigationMenu;
