import React from "react";
import { Nunito } from "next/font/google";
import "../styles/tailwind.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import QueryProvider from "~~/components/QueryProvider";
import "~~/styles/globals.css";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({ title: "EduResultChain", description: "Result and Education Management System" });

const nunito = Nunito({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={nunito.variable}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
};

export default ScaffoldEthApp;
