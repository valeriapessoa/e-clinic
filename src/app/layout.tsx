import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SessionWrapper from "../components/SessionWrapper";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Clinic",
  description: "Bem-vindo à E-Clinic, onde cuidamos da sua saúde com dedicação e excelência. Descubra nossas unidades e serviços médicos personalizados para você e sua família.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          {children}
          <Footer  />
        </body>
      </html>
    </SessionWrapper>
  );
}
