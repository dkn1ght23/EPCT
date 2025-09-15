import React from "react";

const IconLeadership = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    {/* Crown base */}
    <path d="M5 17H19L17 11L12 14L7 11L5 17Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
    {/* Crown tips */}
    <circle cx="7" cy="10" r="1" fill="white"/>
    <circle cx="12" cy="8" r="1" fill="white"/>
    <circle cx="17" cy="10" r="1" fill="white"/>
    {/* Base line */}
    <path d="M5 17V19H19V17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export default IconLeadership;
