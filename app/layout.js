import { Roboto } from "next/font/google";
import "./globals.css";
<<<<<<< HEAD
import Navbar from "@/components/navbar";

=======
import Navbar from "@/components/Navbar";


>>>>>>> 92803e29c5fa6bfaaf69be8027408d7b159e51f6
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
<<<<<<< HEAD
  title: "Debugged -A hub for fixes",
  description: "A platform for deelopers to share major b ugs ecountereed and thier respecive fixes.",
=======
  title: "Debugged - A hub for fixes",
  description:
    "A platform for developers to share major bugs encountered and their respective fixes.",
>>>>>>> 92803e29c5fa6bfaaf69be8027408d7b159e51f6
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
      >
<<<<<<< HEAD
        <Navbar/>
=======
        <Navbar />
>>>>>>> 92803e29c5fa6bfaaf69be8027408d7b159e51f6
        {children}
      </body>
    </html>
  );
}
