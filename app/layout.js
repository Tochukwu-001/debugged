import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Debugged -A hub for fixes",
  description: "A platform for deelopers to share major b ugs ecountereed and thier respecive fixes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
