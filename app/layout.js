import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/components/Provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Abhishek's Todo App",
  description: "A simple todo app built with Next.js and Redux Toolkit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
