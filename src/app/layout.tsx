import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SessionWrapper from "../components/SessionWrapper";


const font = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

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
        <body className={font.className}>
          <Header />
          {children}
          <Footer  />
        </body>
      </html>
    </SessionWrapper>
  );
}
