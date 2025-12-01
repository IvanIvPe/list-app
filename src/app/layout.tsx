import Navbar from "./components/navbar";
import Footer from "./components/footer";
import React from "react";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
      <ThemeProvider>
        <Navbar />
        {children}
        <Footer />
      </ThemeProvider>
      </body>
    </html>
  );
}

