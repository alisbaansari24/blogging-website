import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyButtons from "@/components/StickyButtons";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#f9fafb] text-gray-700">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyButtons/>
      </body>
    </html>
  );
}
