"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden bg-black text-white flex items-center">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
         <Image
            src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=2080&auto=format&fit=crop"
            alt="Hero Background"
            fill
            className="object-cover opacity-60"
            priority
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
            Defy <br />
            <span className="text-primary italic">Limits.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-lg">
            Experience the next generation of performance footwear. 
            Engineered for speed, designed for style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link href="/products">Shop Collection</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-black transition-colors" asChild>
              <Link href="/products/new">New Arrivals</Link>
            </Button>
          </div>
        </motion.div>

        {/* Floating Shoe Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
          animate={{ opacity: 1, scale: 1, rotate: -15 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:block relative h-[500px] w-full"
        >
           {/* Add a specific transparent shoe image here if possible, otherwise use a placeholder or creative CSS */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="relative w-full h-full"
            >
             <Image
                 src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1964&auto=format&fit=crop" // Placeholder: Use a clean sneaker image
                 alt="Featured Shoe"
                 fill
                 className="object-contain drop-shadow-2xl"
             />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
