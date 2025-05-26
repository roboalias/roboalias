
import React from 'react';

const TerminalHeader = () => {
  return (
    <div className="mb-12">
      <div className="text-terminal-blue text-sm mb-2">
        <span className="text-terminal-gray">~/dev/</span>roboticali <span className="text-terminal-gray">&gt;</span> ls
      </div>
      <div className="mb-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
          We're building the<br />
          next-gen operating system<br />
          for AI agents.
        </h1>
        <div className="text-terminal-blue text-sm">
          <span className="text-terminal-gray">~/dev/</span>roboticali <span className="text-terminal-gray">&gt;</span> 
          <span className="terminal-cursor ml-1"></span>
        </div>
      </div>
    </div>
  );
};

export default TerminalHeader;
