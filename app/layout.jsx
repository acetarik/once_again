// "use client";
import "./globals.css";
import { jk } from "./globals.css";
import { Roboto } from "next/font/google";
import GlobalStates from "./api/contexts/GlobalStates";

// const roboto = Roboto({ subsets: ["latin"] });
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "تشکیل",
  description: "Login Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[e0e0e0] rale ">
        <GlobalStates>{children}</GlobalStates>
      </body>
    </html>
  );
}
