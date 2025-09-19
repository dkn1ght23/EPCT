import React from "react";

const IconProject = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    {/* Ground line */}
    <path d="M3 20H21" stroke="white" strokeWidth="2" strokeLinecap="round"/>

    {/* Left building */}
    <rect x="5" y="12" width="4" height="8" stroke="white" strokeWidth="2"/>
    <path d="M7 12V20" stroke="white" strokeWidth="2"/> {/* middle divider */}

    {/* Right building */}
    <rect x="15" y="8" width="4" height="12" stroke="white" strokeWidth="2"/>
    <path d="M17 8V20" stroke="white" strokeWidth="2"/> {/* middle divider */}

    {/* Small middle block */}
    <rect x="10" y="15" width="4" height="5" stroke="white" strokeWidth="2"/>
  </svg>
);

export default IconProject;
