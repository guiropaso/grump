import { Inter } from "next/font/google";
import { Orbitron } from "next/font/google";
import { Lilita_One } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });
const lilita = Lilita_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lilita",
});

export const metadata = {
  title: "$GRUMP",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth m-0 p-0">
      <body className={`${orbitron.variable} ${lilita.variable}`}>
        {children}
      </body>
    </html>
  );
}
