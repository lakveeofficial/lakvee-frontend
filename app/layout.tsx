import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";


const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"], // Choose what you need
});

export const metadata: Metadata = {
  title: "Lakvee",
  description: "Lakvee Software Training Institute is a future-focused training and placement organization committed to creating industry-ready software professionals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased bg-background text-text font-sans`}>
        <div>{children}</div>
      </body>
    </html>
  );
}
