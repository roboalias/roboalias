
import React from 'react';

interface NavigationMenuProps {
  sections: string[];
  activeSection: string | null;
  onSectionClick: (section: string) => void;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ sections, activeSection, onSectionClick }) => {
  return (
    <div className="mb-8">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 text-sm">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => onSectionClick(section)}
            className={`text-left py-1 px-2 rounded transition-colors ${
              activeSection === section
                ? 'text-terminal-blue bg-terminal-blue bg-opacity-10'
                : 'text-terminal-red hover:text-terminal-blue hover:bg-terminal-blue hover:bg-opacity-5'
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
