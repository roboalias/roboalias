
import React from 'react';

const TerminalHeader = () => {
  return (
    <div className="mb-12">
      <div className="text-terminal-blue text-sm mb-2">
        <span className="text-terminal-gray">~/dev/</span>roboticali <span className="text-terminal-gray">&gt;</span> ls
      </div>
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">
          Ali Ahmed
        </h1>
        <p className="text-lg md:text-xl text-terminal-gray mb-4">
          Roboticist. Founder. Inventor. Author.
        </p>
        <div className="text-terminal-blue text-sm">
          <span className="text-terminal-gray">~/dev/</span>roboticali <span className="text-terminal-gray">&gt;</span> 
          <span className="terminal-cursor ml-1"></span>
        </div>
      </div>
    </div>
  );
};

export default TerminalHeader;
