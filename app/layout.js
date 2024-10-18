import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio Pavon",
  description: "Ingeniero software, escritorio virtual versión mínima con proyectos realizados",
  openGraph: {
    title: "Portfolio Pavon",
    description: "Ingeniero software, escritorio virtual versión mínima con proyectos realizados",
    images: [
      {
        url: "/img.png", 
        width: 800,
        height: 600,
        alt: "Imagen representativa del portfolio",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
