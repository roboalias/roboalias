
import React from 'react';

interface NavigationMenuProps {
  sections: string[];
  activeSection: string | null;
  onSectionClick: (section: string) => void;
  isVisible: boolean;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ sections, activeSection, onSectionClick, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="mb-8">
      <div className="flex flex-col text-sm max-w-xs">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => onSectionClick(section)}
            className={`text-left py-1 px-2 rounded transition-colors ${
              activeSection === section
                ? 'text-terminal-blue bg-terminal-blue bg-opacity-10'
                : 'text-foreground hover:text-terminal-blue hover:bg-terminal-blue hover:bg-opacity-5'
            }`}
          >
            {section.toLowerCase()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavigationMenu;
