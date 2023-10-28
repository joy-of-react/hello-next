import React from 'react';

import './styles.css';

function RootLayout({ children }) {
  const timestamp = new Date().toLocaleString();
  return (
    <html lang="en">
      <body>
        {children}
        <footer color='hotpink'>
          Page rendered on {timestamp} and owned by Bachand Inc.
        </footer>
      </body>
    </html>
  );
}

export default RootLayout;
