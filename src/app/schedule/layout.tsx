import "@/app/globals.css";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import { Metadata } from "next";
import { getRole } from "@/authLib";


export const metadata: Metadata = {
    title: "Расписание",
    description: "Generated by create next app",
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const role = getRole()
    return (
    <>
        <Header role={role} type="other"/>
            {children}
        <Footer/>
    </>
  );
}
