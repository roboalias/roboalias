
import React from 'react';

interface TerminalHeaderProps {
  activeSection?: string | null;
}

const TerminalHeader: React.FC<TerminalHeaderProps> = ({ activeSection }) => {
  return (
    <div className="mb-12">
      <div className="mb-8">
        <h1 className="text-xl md:text-2xl font-bold mb-2 text-foreground">
          Ali Ahmed
        </h1>
        <p className="text-base md:text-lg text-foreground mb-4">
          Roboticist. Founder. Inventor.
        </p>
        <div className="text-terminal-blue text-sm">
          <span className="text-terminal-gray">~/</span>roboticali 
          {activeSection && (
            <>
              <span className="text-terminal-gray"> &gt; </span>
              {activeSection.toLowerCase()}
            </>
          )}
          <span className="text-terminal-gray"> &gt;</span> 
          <span className="terminal-cursor ml-1"></span>
        </div>
      </div>
    </div>
  );
};

export default TerminalHeader;
