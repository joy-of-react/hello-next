import React from 'react';

import './styles.css';

function RootLayout({ children }) {
  const date = new Date();
  const timestamp = date.toLocaleString();
  const utc = date.toUTCString();
  return (
    <html lang='en'>
      <body>
        {children}
        <footer>
          <p>
            Page rendered on {timestamp} ({utc})
          </p>
          <p>Copyright Thang Inc.</p>
        </footer>
      </body>
    </html>
  );
}

export default RootLayout;
