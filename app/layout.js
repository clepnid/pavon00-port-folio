import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio Pavon",
  description: "Ingeniero software, escritorio virtual versión mínima con proyectos realizados",
  openGraph: {
    title: "Portfolio Pavon",
    description: "Ingeniero software, escritorio virtual versión mínima con proyectos realizados",
    images: ["/img.png"]
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
