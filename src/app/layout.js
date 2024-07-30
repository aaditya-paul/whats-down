import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Whatsdown",
  description: "Chat with your friends",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <Navbar />
        <div className="">{children}</div>
      </body>
    </html>
  );
}
