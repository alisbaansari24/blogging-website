import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#f9fafb] text-gray-700">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
