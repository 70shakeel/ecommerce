"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { products, Product } from "@/lib/data";
import { useCart } from "@/components/cart-provider";
import { ShoppingBag, Star, Share2, Heart, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  
  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  if (!product) {
    return <div className="text-center py-20">Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        
        {/* Product Image Section */}
        <div className="space-y-4">
          <div className="relative aspect-[4/4] bg-secondary rounded-2xl overflow-hidden shadow-sm">
             <div className="absolute top-4 left-4 z-10">
                <Badge className="bg-primary text-primary-foreground">New Release</Badge>
             </div>
             <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
             />
          </div>
          {/* Thumbnails placeholder */}
          <div className="flex gap-4 overflow-x-auto pb-2">
             <div className="w-24 h-24 relative rounded-lg overflow-hidden border-2 border-primary cursor-pointer">
                <Image src={product.image} alt="Thumbnail 1" fill className="object-cover" />
             </div>
             {/* Creating fake thumbnails by re-using image just to show UI structure */}
             <div className="w-24 h-24 relative rounded-lg overflow-hidden border border-transparent hover:border-muted-foreground/50 opacity-50 cursor-pointer transition-all">
                <Image src={product.image} alt="Thumbnail 2" fill className="object-cover" />
             </div>
          </div>
        </div>

        {/* Product Info Section */}
        <div className="flex flex-col">
          <div className="mb-6">
             <h2 className="text-sm font-medium text-muted-foreground mb-1">{product.category}</h2>
             <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">{product.name}</h1>
             <div className="flex items-center gap-4 mb-4">
                <div className="flex text-yellow-500">
                   {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <span className="text-sm text-muted-foreground">(124 Reviews)</span>
             </div>
             <div className="text-3xl font-bold text-primary">${product.price}</div>
          </div>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            {product.description}
          </p>

          <Separator className="mb-8" />

          {/* Size Selector */}
          <div className="mb-8">
             <div className="flex justify-between items-center mb-4">
               <span className="font-semibold">Select Size</span>
               <Button variant="link" className="h-auto p-0 text-muted-foreground">Size Guide</Button>
             </div>
             <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
               {product.sizes.map((size) => (
                 <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    className={`h-12 w-full ${selectedSize === size ? "ring-2 ring-offset-2 ring-primary" : ""}`}
                    onClick={() => setSelectedSize(size)}
                 >
                   {size}
                 </Button>
               ))}
             </div>
             {!selectedSize && <p className="text-destructive text-sm mt-2">Please select a size</p>}
          </div>

          <div className="flex gap-4 mb-8 mt-auto">
             <Button 
                size="lg" 
                className="flex-1 text-lg h-14"
                disabled={!selectedSize}
                onClick={() => {
                   if (selectedSize) {
                      addToCart(product, selectedSize);
                   }
                }}
             >
               <ShoppingBag className="mr-2 h-5 w-5" />
               {selectedSize ? "Add to Cart" : "Select Size"}
             </Button>
             <Button variant="outline" size="icon" className="h-14 w-14 rounded-lg">
                <Heart className="h-6 w-6" />
             </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
             <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" /> Free Shipping & Returns
             </div>
             <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" /> Member Exclusive
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
