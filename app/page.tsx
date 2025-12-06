import { HeroSection } from "@/components/hero-section";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      <section className="py-20 container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">Featured Drops</h2>
            <p className="text-muted-foreground">The latest heat for your feet.</p>
          </div>
          <Button variant="ghost" asChild className="group">
            <Link href="/products">
              View All <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Another Section (e.g., Just Dropped or Categories) could go here */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center max-w-2xl">
           <h2 className="text-3xl font-bold mb-6">Join the Movement</h2>
           <p className="text-muted-foreground mb-8 text-lg">
             Sign up for exclusive access to new releases, events, and member-only products.
           </p>
           <div className="flex gap-2 max-w-md mx-auto">
             {/* Newsletter placeholder */}
              <Button size="lg" className="w-full">Become a Member</Button>
           </div>
        </div>
      </section>
    </div>
  );
}
