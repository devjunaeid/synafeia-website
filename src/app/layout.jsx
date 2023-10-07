import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Synafeia",
  description: "Your One Stop Digital Solution",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="mainContainer">
        <main>{children}</main>
        </div>
        <Footer/>
      </body>
    </html>
  );
}
