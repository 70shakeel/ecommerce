import type { Metadata } from "next";
import { Inter } from "next/font/google"; // or local fonts if preferred, simplifying for now
import "./globals.css";
import { CartProvider } from "@/components/cart-provider";
import { WishlistProvider } from "@/components/wishlist-provider";
import { Navbar } from "@/components/navbar";
import { CartSheet } from "@/components/cart-sheet";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pike | Premium Footwear",
  description: "Elevate your game with Pike shoes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col antialiased`}>
        <CartProvider>
          <WishlistProvider>
            <Navbar />
            <CartSheet />
            <main className="flex-1 pt-16">
              {children}
            </main>
            <Footer />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
