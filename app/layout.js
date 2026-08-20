import "./globals.css";

export const metadata = {
  title: "Alex Martin — Photographe",
  description: "Portfolio du photographe Alex Martin.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
