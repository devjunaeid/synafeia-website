import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Synafeia",
  description: "Your One Stop Digital Solution",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="mainContainer">
        <main>{children}</main>
        </div>
        <Footer/>
      </body>
    </html>
  );
}
