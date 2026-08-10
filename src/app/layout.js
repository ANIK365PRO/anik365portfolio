import { Hanken_Grotesk, Manrope } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "Anik Mohanta - Portfolio",
  description: "Anik Mohanta - Web Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${hankenGrotesk.variable} ${manrope.variable} antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
          rel="stylesheet"
        />
      </head>
      <body className="bg-brand-bg text-brand-text min-h-screen overflow-x-hidden font-body-md text-body-md selection:bg-brand-accent selection:text-white flex flex-col">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
