import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pedduri Venkatasai | Portfolio",
  description: "B.Tech AIML Graduate | Aspiring SDE & AI Engineer. Explore my projects, skills, and experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body className="bg-primary-dark text-text-light font-inter">
        {children}
      </body>
    </html>
  );
}
