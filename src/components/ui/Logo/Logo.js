import React from "react";
import "./Logo.scss";

const Icon = () => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M31.9338 24.6824V5.73889C31.9338 4.28056 30.3114 3.41055 29.0997 4.21947L22.4462 8.6646L26.9445 11.6706V24.4381C26.9445 26.3829 24.7813 27.5437 23.1669 26.4643L13.9847 20.3301L9.48754 23.335L20.6009 30.7613C25.4443 33.997 31.9338 30.5169 31.9338 24.6824Z"
        fill="url(#paint0_linear_1024_1366)"
      />
      <path
        d="M4.99044 20.3289V7.56146C4.99044 5.61665 7.15361 4.457 8.76807 5.53519L17.9491 11.6706L22.4474 8.66454L11.3329 1.2394C6.4895 -1.99743 0 1.48264 0 7.31822V26.2606C0 27.7201 1.62238 28.5901 2.83407 27.7812L9.48754 23.335L4.99044 20.3289Z"
        fill="url(#paint1_linear_1024_1366)"
      />
      <path
        d="M13.9848 20.329L26.9434 11.6707L26.9445 11.6706L22.4462 8.6646L17.9491 11.6706L4.99044 20.3289L4.98931 20.329L9.48754 23.335L13.9847 20.3301L13.9848 20.329Z"
        fill="url(#paint2_linear_1024_1366)"
      />
      <defs>
        <linearGradient id="paint0_linear_1024_1366" x1="0" y1="16" x2="31.9338" y2="16" gradientUnits="userSpaceOnUse">
          <stop stopColor="#36D1DC" />
          <stop offset="1" stopColor="#5B86E5" />
        </linearGradient>
        <linearGradient id="paint1_linear_1024_1366" x1="0" y1="16" x2="31.9338" y2="16" gradientUnits="userSpaceOnUse">
          <stop stopColor="#36D1DC" />
          <stop offset="1" stopColor="#5B86E5" />
        </linearGradient>
        <linearGradient id="paint2_linear_1024_1366" x1="0" y1="16" x2="31.9338" y2="16" gradientUnits="userSpaceOnUse">
          <stop stopColor="#36D1DC" />
          <stop offset="1" stopColor="#5B86E5" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const Logo = () => {
  return (
    <div className="density-logo">
      <Icon />
      <div className="density-logo-text">Density</div>
    </div>
  );
};

export default Logo;
