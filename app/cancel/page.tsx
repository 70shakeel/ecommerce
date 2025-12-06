"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { XCircle } from "lucide-react";

export default function CancelPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <XCircle className="h-24 w-24 text-destructive mb-6" />
      <h1 className="text-3xl font-bold mb-4">Payment Cancelled</h1>
      <p className="text-muted-foreground max-w-md mb-8">
        Your payment was not processed. No charges were made. You can try again or continue shopping.
      </p>
      <Button asChild size="lg">
        <Link href="/">Return to Cart</Link>
      </Button>
    </div>
  );
}
