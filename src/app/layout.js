import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/templates/Footer";
import Header from "@/components/templates/Header";
import Spacing from "@/components/layout/Spacing";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Inicio | EASYLAV",
  description: "Sitio web de inicio EASYLAV",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-light`}>
        <Header />
        <main className="lg:mt-16 xl:mt-0">{children}</main>
        <Spacing height={"h-20"} />
        <Footer />
      </body>
    </html>
  );
}
