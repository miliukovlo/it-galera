
import "@/app/globals.css";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header type="other"/>
      {children}
      <Footer/>
    </>
  );
}
