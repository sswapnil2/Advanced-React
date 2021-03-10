import React from 'react';

// eslint-disable-next-line react/prop-types
export default function Page({ children }) {
  return (
    <div>
      <p>I am page Component</p>
      {children}
    </div>
  );
}
