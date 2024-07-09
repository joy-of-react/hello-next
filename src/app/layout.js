import React from 'react';

import './styles.css';

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer>
          Copyright imad inc
        </footer>
      </body>
    </html>
  );
}

export default RootLayout;
