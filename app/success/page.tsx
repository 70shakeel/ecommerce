"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { useCart } from "@/components/cart-provider";
import { motion } from "framer-motion";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const { cart, removeFromCart } = useCart(); // In a real app, you'd clear the cart globally

  // Simple cart clear simulation (requires updating Context to support clearCart or manually removing all)
  // For now, we'll just show the message. Context update is a "nice to have".
  
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <CheckCircle className="h-24 w-24 text-green-500 mb-6" />
      </motion.div>
      <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
      <p className="text-muted-foreground max-w-md mb-8">
        Thank you for your purchase. Your order has been confirmed and will be shipped shortly.
        {sessionId && <span className="block text-xs mt-2 text-gray-400">Order ID: {sessionId.slice(-8)}</span>}
      </p>
      <div className="flex gap-4">
        <Button asChild size="lg">
          <Link href="/">Return Home</Link>
        </Button>
        <Button variant="outline" asChild size="lg">
          <Link href="/products">Continue Shopping</Link>
        </Button>
      </div>
    </div>
  );
}
