'use client'
import { Inter } from "next/font/google";
import AuthProvider from "./context/AuthProvider";
import Navbar from "./components/Navbar/page";
import Footer from "./components/Footer/page";
import Dashboard from "./components/Dashboard/page";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children, useLayout = true }) {
  console.log('useLayout', useLayout)
  if (!useLayout) {
    // Eğer useLayout false ise, sadece children'i döndür

    return (
      <>
           <AuthProvider>
        <Dashboard />
        {children}
             </AuthProvider>
      </>
    );
  }else{
    return (
      <html lang="en">
        <body className={inter.className}>
          <AuthProvider>
             <Navbar />
            <main>{children}</main>
             <Footer /> 
          </AuthProvider>
        </body>
      </html>
    );
  }
  
}
