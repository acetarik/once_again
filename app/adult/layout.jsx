// import "../globals.css";
// import { jk } from "./globals.css";
import { Roboto } from "next/font/google";
import UNavbar from "../../components/usercomps/navbar";
import Sidebaar from "../../components/sidebaar";
// const roboto = Roboto({ subsets: ["latin"] });
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "تشکیل ",
  description: "Login Page",
};

export default function UULayout({ children }) {
  return (
    <>
      <div className="flex flex-row ">
        <Sidebaar />
        {children}
      </div>
    </>
  );
}
