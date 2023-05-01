import './globals.css';

export const metadata = {
  title: 'Hello Next!',
  description: 'The Joy of React',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
