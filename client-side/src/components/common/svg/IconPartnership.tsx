import React from "react";

const IconPartnership = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    {/* Left person */}
    <circle cx="7" cy="9" r="3" stroke="white" strokeWidth="2" />
    <path d="M4 17C4 15 5.5 13.5 7.5 13.5H9.5C11.5 13.5 13 15 13 17V18" stroke="white" strokeWidth="2" strokeLinecap="round" />

    {/* Right person */}
    <circle cx="17" cy="9" r="3" stroke="white" strokeWidth="2" />
    <path d="M20 17C20 15 18.5 13.5 16.5 13.5H14.5C12.5 13.5 11 15 11 17V18" stroke="white" strokeWidth="2" strokeLinecap="round" />

    {/* Connection / handshake line */}
    <path d="M9 17H15" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default IconPartnership;
