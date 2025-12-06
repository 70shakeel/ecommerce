"use client";

import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useState, useEffect, Suspense } from "react";

function ProductGrid() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (category) {
      setFilteredProducts(products.filter(p => p.category === category));
    } else {
      setFilteredProducts(products);
    }
  }, [category]);

  const categories = ["All", "Running", "Lifestyle"];

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
           <h1 className="text-4xl font-bold tracking-tight mb-2">
             {category ? `${category} Shoes` : "All Shoes"}
           </h1>
           <p className="text-muted-foreground">
             {filteredProducts.length} results
           </p>
        </div>
        
        <div className="flex gap-2 bg-secondary/30 p-1 rounded-lg">
          {categories.map((c) => (
             <Button
                key={c}
                variant={category === c || (c === "All" && !category) ? "default" : "ghost"}
                size="sm"
                asChild
             >
                <Link href={c === "All" ? "/products" : `/products?category=${c}`}>
                  {c}
                </Link>
             </Button>
          ))}
        </div>
      </div>

      <Separator className="mb-8" />

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <p className="text-xl text-muted-foreground">No products found in this category.</p>
          <Button variant="link" asChild className="mt-4">
             <Link href="/products">Clear filters</Link>
          </Button>
        </div>
      )}
    </>
  );
}

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Suspense fallback={<div className="py-20 text-center">Loading products...</div>}>
         <ProductGrid />
      </Suspense>
    </div>
  );
}
