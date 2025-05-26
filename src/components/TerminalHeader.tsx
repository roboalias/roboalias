
import React from 'react';

const TerminalHeader = () => {
  return (
    <div className="mb-12">
      <div className="mb-8">
        <h1 className="text-xl md:text-2xl font-bold mb-2 text-foreground">
          Ali Ahmed
        </h1>
        <p className="text-base md:text-lg text-terminal-gray mb-4">
          Roboticist. Founder. Inventor. Author.
        </p>
        <div className="text-terminal-blue text-sm">
          <span className="text-terminal-gray">~/</span>roboticali <span className="text-terminal-gray">&gt;</span> 
          <span className="terminal-cursor ml-1"></span>
        </div>
      </div>
    </div>
  );
};

export default TerminalHeader;
