"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Product } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "./cart-provider";
import { ShoppingBag, Heart } from "lucide-react";
import { useWishlist } from "@/components/wishlist-provider";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();

  return (
    <Card className="group overflow-hidden border-none shadow-none hover:shadow-xl transition-all duration-300">
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-[4/5] bg-secondary/50 overflow-hidden rounded-t-xl">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Quick Add Overlay */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-start justify-end p-4">
              <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full shadow-md hover:scale-105 transition-transform"
                  onClick={(e) => {
                    e.preventDefault();
                    if (isInWishlist(product.id)) {
                      removeFromWishlist(product.id);
                    } else {
                      addToWishlist(product.id);
                    }
                  }}
                >
                  <Heart className={`h-5 w-5 ${isInWishlist(product.id) ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
                </Button>
          </div>
        </div>
      </Link>
      <CardContent className="pt-4 px-2">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
            <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
              <Link href={`/products/${product.id}`}>{product.name}</Link>
            </h3>
          </div>
          <p className="font-bold text-lg">${product.price}</p>
        </div>
      </CardContent>
      <CardFooter className="px-2 pb-4">
         <Button 
            className="w-full gap-2" 
            onClick={(e) => {
              e.preventDefault();
              addToCart(product, product.sizes[0]); // Defaulting size for quick add, better to open modal
            }}
          >
            <ShoppingBag className="h-4 w-4" /> Add to Cart
         </Button>
      </CardFooter>
    </Card>
  );
}
